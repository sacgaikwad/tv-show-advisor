import s from "./style.module.css";
import { TvShowApi } from "./api/tvShow";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "../src/config.js";
import { ShowDetails } from "./components/ShowDetails/ShowDetails";
import { Logo } from "./components/Logo/Logo";
import LogoImage from "./assets/images/logo.png";

import { ShowList } from "./components/ShowList/ShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState("");

  let [recommentationList, setRecommentationList] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TvShowApi.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  async function fetchRecommentations(tvShowId) {
    if (tvShowId) {
      const recommentations = await TvShowApi.fetchRecommendations(tvShowId);
      if (recommentations.length > 0) {
        setRecommentationList(recommentations.slice(0, 10));
      }
    } else {
      console.log("tvShowId is null", tvShowId);
    }
  }

  async function fetchByTitle(title) {
    console.log("Recieved title:", title);

    let movieShow = await TvShowApi.fetchByTitle(title);

    if (movieShow.length > 0) {
      setCurrentTVShow(movieShow[0]);
    } else {
      console.log(movieShow);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow.length > 0) {
      fetchRecommentations(currentTVShow[0].id);
    } else {
      if (currentTVShow && currentTVShow.id) {
        fetchRecommentations(currentTVShow.id);
      }
    }
    console.log(currentTVShow);
  }, [currentTVShow]);

  function updateCurrentTvShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              title="WatoWatch"
              subtitle="Find a show you may like"
              img={LogoImage}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        <ShowDetails showDetail={currentTVShow} />
      </div>
      <div className={s.recommended_tv_shows}>
        {recommentationList && (
          <>
            <ShowList
              onClickItem={updateCurrentTvShow}
              tvShow={recommentationList}
            />
          </>
        )}
      </div>
    </div>
  );
}

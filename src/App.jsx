import s from "./style.module.css";
import { TvShowApi } from "./api/tvShow";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "../src/config.js";
import { ShowDetails } from "./components/ShowDetails/ShowDetails";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState("");

  async function fetchPopulars() {
    const popularTVShowList = await TvShowApi.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }
  useEffect(() => {
    fetchPopulars();
  }, []);

  //console.log(currentTVShow);

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
            <div>LOGO</div>
            <div>SUBTITLE</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text"></input>
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        <ShowDetails showDetail={currentTVShow} />
      </div>
      <div className={s.recommended_tv_shows}>TV show recommended</div>
    </div>
  );
}

import s from "./style.module.css";
import { TvShowApi } from "./api/tvShow";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "../src/config.js";
import { ShowDetails } from "./components/ShowDetails/ShowDetails";
import { Logo } from "./components/Logo/Logo";
import LogoImage from "./assets/images/logo.png";

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

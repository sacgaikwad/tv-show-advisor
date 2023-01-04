import s from "./style.module.css";
import { TvShowApi } from "./api/tvShow";

TvShowApi.fetchPopulars();

export function App() {
  return (
    <div className={s.main_container}>
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
      <div className={s.tv_show_detail}>Tv Show details</div>
      <div className={s.recommended_tv_shows}>TV show recommended</div>
    </div>
  );
}

import { Ratings } from "../Ratings/Ratings.jsx";
import s from "./style.module.css";

export function ShowDetails({ showDetail }) {
  return (
    <div>
      <div className={s.title}>
        <span> {showDetail.original_name}</span>
      </div>
      <Ratings rating={showDetail.vote_average} />
      <div className={s.overview}>
        <span>{showDetail.overview}</span>
      </div>
    </div>
  );
}

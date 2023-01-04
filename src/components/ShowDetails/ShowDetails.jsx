//import { Ratings } from "./Ratings";
import { Ratings } from "../Ratings/Ratings.jsx";
import s from "./style.module.css";

export function ShowDetails({ showDetail }) {
  //console.log(showDetail);
  return (
    <div>
      <div className={s.title}>{showDetail.original_name}</div>
      <Ratings rating={showDetail.vote_average} />
      <div className={s.overview}>{showDetail.overview}</div>
    </div>
  );
}

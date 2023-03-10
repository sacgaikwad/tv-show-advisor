import listStyle from "../ShowListItem/style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export function ShowListItem({ tvShow, onClick }) {
  function onTvItemClick() {
    onClick(tvShow);
  }

  return (
    <>
      <div onClick={onTvItemClick} className={listStyle.container}>
        <img
          alt={tvShow.name}
          src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
          className={listStyle.img}
        />
        <div className={listStyle.title}>{tvShow.name}</div>
      </div>
    </>
  );
}

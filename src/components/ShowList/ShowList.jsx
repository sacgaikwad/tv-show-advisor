import listStyle from "../ShowList/style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export function ShowList({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <>
      <div onClick={onClick_} className={listStyle.container}>
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

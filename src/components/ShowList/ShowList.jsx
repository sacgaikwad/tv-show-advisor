import listStyle from "../ShowList/style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export function ShowList(props) {
  return (
    <>
      <div className={listStyle.container}>
        <img
          alt={props.name}
          src={SMALL_IMG_COVER_BASE_URL + props.img}
          className={listStyle.img}
        />
        <div className={listStyle.title}>{props.name}</div>
      </div>
    </>
  );
}

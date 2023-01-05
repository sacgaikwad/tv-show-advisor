import listCss from "../ShowList/style.module.css";
import { ShowListItem } from "../ShowListItem/ShowListItem";
export function ShowList({ tvShow, onClickItem }) {
  //console.log(tvShow);
  const shows = [];

  for (let show of tvShow) {
    shows.push(
      <span className={listCss.tv_show_item} key={show.id}>
        <ShowListItem tvShow={show} onClick={onClickItem} />
      </span>
    );
  }

  return (
    <div>
      <div className={listCss.title}>You'll probably like :</div>
      <div className={listCss.list}>{shows}</div>
    </div>
  );
}

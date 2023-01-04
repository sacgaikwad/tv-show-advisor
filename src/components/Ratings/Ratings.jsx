import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
import ratingStyle from "../Ratings/style.module.css";

export function Ratings(props) {
  let rating = props.rating / 2;
  // Declare star icon array
  const starList = [];
  // Store number of filled stars
  const starFillCount = Math.floor(rating);
  // Store if yes or no there is a half star
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  // Store the number of empty stars
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  // Push the filled star icons
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  // Push an half star icon if necessary
  if (hasHalfStar) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  // Push the empty star icons
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }
  return (
    <div>
      <div className={ratingStyle.ratings_container}>
        {starList}
        <span className={ratingStyle.ratings}>{rating}</span>
      </div>
    </div>
  );
}

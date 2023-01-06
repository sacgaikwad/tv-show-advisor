import s from "../SearchBar/style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key == "Enter" && e.target.value.trim() != "") {
      console.log("Search");
      onSubmit(e.target.value);
    }
  }
  return (
    <div>
      <SearchIcon size={25} className={s.icon} />
      <input
        onKeyUp={submit}
        type="text"
        placeholder={"search a tv show"}
        className={s.input}
      />
    </div>
  );
}

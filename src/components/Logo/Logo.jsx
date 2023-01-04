import logoStyle from "../Logo/style.module.css";

export function Logo(props) {
  return (
    <>
      <div className={logoStyle.container}>
        <img className={logoStyle.img} src={props.img} alt="" />
        <span className={logoStyle.title}>{props.title}</span>
      </div>
      <span className={logoStyle.subtitle}>{props.subtitle}</span>
    </>
  );
}

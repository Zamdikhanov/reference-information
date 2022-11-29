import css from "./Burger.module.scss";

function Burger({ onClick = () => {}, isOpen = false }) {
  return (
    <button
      className={`${css.burger} ${isOpen && css.menu_button__active}`}
      onClick={onClick}
      type="button"
      aria-expanded="false"
      aria-label="Menu"
      aria-controls="mainnav"
    >
      <span></span>
    </button>
  );
}

export default Burger;

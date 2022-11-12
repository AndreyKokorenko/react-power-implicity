import "./Navbar.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/apple-logo.svg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" className="navbar__link">
        <LogoIcon className="navbar__logo" />
      </a>
      <nav className="navbar__list">
        <a href="#" className="navbar__list--link">
          Features
        </a>
        <a href="#" className="navbar__list--link">
          Partners
        </a>
        <a href="#" className="navbar__list--link">
          Stories
        </a>
      </nav>
      <button className="navbar__button">Download for free</button>
    </div>
  );
};

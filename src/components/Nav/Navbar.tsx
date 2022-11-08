import "./Navbar.scss";
import { ReactComponent as LogoIcon } from "../../assets/images/apple-logo.svg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" className="navbar__logo--link">
        <LogoIcon className="navbar__logo--link navbar__logo" />
      </a>
      <nav className="navbar__nav">
        <a href="#" className="navbar__nav navbar__nav--link">
          Features
        </a>
        <a href="#" className="navbar__nav navbar__nav--link">
          Partners
        </a>
        <a href="#" className="navbar__nav navbar__nav--link">
          Stories
        </a>
      </nav>
      <button className="navbar__button">Download for free</button>
    </div>
  );
};

import "./header.sass";
import logo from "../img/union.svg";
function onClicks() {
  const lineFirst = document.querySelector(".mobile-li-line-1");
  const lineTwo = document.querySelector(".mobile-li-line-2");
  lineFirst.classList.toggle("mobile-li-line-1-anim");
  lineTwo.classList.toggle("mobile-li-line-2-anim");
}
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" className="logo" />
        <span className="logo-name">Ramil'</span>
      </div>
      <ul className="header-ul">
        <li className="header-li">
          <a href="#">home</a>
        </li>
        <li className="header-li">
          <a href="#">works</a>
        </li>
        <li className="header-li">
          <a href="#">about-me</a>
        </li>
        <li className="header-li">
          <a href="#">contacts</a>
        </li>
      </ul>
      <ul className="header-ul-mobile" onClick={onClicks}>
        <li className="mobile-li-line-1"></li>
        <li className="mobile-li-line-2"></li>
      </ul>
    </div>
  );
}

export default Header;

import "./header.sass";
import logo from "../img/union.svg";
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../home/home.jsx'
import Works from "../works/works"; 

function onClicks() {
  const lineFirst = document.querySelector(".mobile-li-line-1");
  const lineTwo = document.querySelector(".mobile-li-line-2");
  const mobileMenuLiseAnimation = document.querySelector('.header-ul-mobile-list')
  const bodyTag = document.getElementsByTagName('body')
  lineFirst.classList.toggle("mobile-li-line-1-anim");
  lineTwo.classList.toggle("mobile-li-line-2-anim");
  mobileMenuLiseAnimation.classList.toggle('header-ul-mobile-list_anim')
  bodyTag[0].classList.toggle('body-mobile-anim')

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
          <Link  to='/portfolio'>home</Link>
        </li>
        <li className="header-li">
          <Link to="/works">works</Link>
        </li>
        <li className="header-li">
          <Link to="/about">about-me</Link>
        </li>
        <li className="header-li">
          <Link to='/contacts'>contacts</Link>
        </li>
      </ul>
      <ul className="header-ul-mobile-list ">
      <div className="logo">
        <img src={logo} alt="" className="logo" />
        <span className="logo-name">Ramil'</span>
      </div>
      <li className="header-li" onClick={onClicks}>
        <Link  to='/'>home</Link>
        </li>
        <li className="header-li">
        <Link to="/works" onClick={onClicks}>works</Link>
        </li>
        <li className="header-li">
        <Link to="/about" onClick={onClicks}>about-me</Link>
        </li>
        <li className="header-li">
        <Link to='/contacts' onClick={onClicks}>contacts</Link>
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

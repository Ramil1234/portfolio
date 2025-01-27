import './header.sass'
import logo from '../img/union.svg'
function Header() {
  return (
    <div className='header'>
        <div className="logo">
          <img src={logo} alt="" className="logo" />
          <span className="logo-name">Ramil'</span>
        </div>
        <ul className="header-ul">
          <li className="header-li"><a href="#">home</a></li>
          <li className="header-li"><a href="#">works</a></li>
          <li className="header-li"><a href="#">about-me</a></li>
          <li className="header-li"><a href="#">contacts</a></li>
        </ul>
    </div>
  );
}

export default Header;

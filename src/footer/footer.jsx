import "../footer/footer.sass";
import logo from "../img/union.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="logo">
          <img src={logo} alt="" className="logo" />
          <span className="logo-name">Ramil'</span>
        </div>
        <span className="title-undertitle mt-16">
          Front-end developer
        </span>
      </div>
      <div className="title-undertitle mb-50">
        © Copyright 2024. Made by Ramil'
      </div>
    </div>
  );
}

export default Footer;

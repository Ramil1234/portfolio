import "./mainTitle.sass";
import ContactFace from "../img/face.svg";
import PurpleIcon from "../img/purple-icon.svg";
import "../utilites.sass";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MainTitle() {
  return (
    <div className="main-contact">
      <div className="main-contact-wrapper">
        <div className="main-title-wrapper">
          <h1 className="main-title">
            Elias is a <span className="color-purple">web designer</span> and{" "}
            <span className="color-purple">front-end developer</span>
          </h1>
          <p className="main-title-undertitle title-undertitle">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="main-title-button">Contact me !!</button>
        </div>
        <div className="main-contact-img">
          <div className="main-contact-img-wrapper">
            <img src={ContactFace} className="contact-img-face" alt="" />
            <img src={PurpleIcon} className="contact-icon-purple" alt="" />
            <div className="main-contact-img-text">
              <p>Currently working on Portfolio</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-contact-quote-wrapper">
        <div className="main-contact-quote">
          <div className="main-contact-quote_up quote-style">
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-style-up" />
            With great power comes great electricity bill
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-style-under" />
          </div>
          <div className="main-contact-quote_under quote-style">- Dr. Who</div>
        </div>
      </div>
    </div>
  );
}

export default MainTitle;

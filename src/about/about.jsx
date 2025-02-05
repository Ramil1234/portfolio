import "../about/about.sass";
import imgMan from "../img/image-man.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About() {
  return (
    <div className="about">
      <h3 className="projects-title">about-me</h3>
      <div className="about-wrapper">
        <div className="about-text">
          <p className="title-undertitle">
          Привет, я Рамиль! <br></br><br></br>
          Я родом из Казани,самоучка, Frontend-разработчик. Более того, моя специализация — разработка адаптивных веб-сайтов с нуля и превращение их в прогрессивные, удобные для пользователя веб-приложения.
          <br></br><br></br>
В течение прошлого года я с энтузиазмом использовал свои знания и навыки для создания отличных веб-сайтов. Я постоянно стремлюсь изучать последние технологии и фреймворки, чтобы расширить стек разработки.
          </p>
          <button className="main-title-button">
            <span>Read more <FontAwesomeIcon icon={faArrowRight} /></span>
          </button>
        </div>

        <div className="about-img">
          <img src={imgMan} alt="#" />
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import "../aboutMe/aboutme.sass";
import imgMan from "../img/image-man.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgPurple from "../img/purple-icon.svg";
import './aboutme.sass'
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
 return (
    <div className="aboutme-wrapper">
         <div className="about">
      <h3 className="projects-title aboutme-title">about-me</h3>
      <div className="about-wrapper">
        <div className="about-text">
          <p className="title-undertitle">
          Привет, я Рамиль! <br></br><br></br>
          Я родом из Казани,самоучка, Frontend-разработчик. Более того, моя специализация — разработка адаптивных веб-сайтов с нуля и превращение их в прогрессивные, удобные для пользователя веб-приложения.
          <br></br><br></br>
В течение прошлого года я с энтузиазмом использовал свои знания и навыки для создания отличных веб-сайтов. Я постоянно стремлюсь изучать последние технологии и фреймворки, чтобы расширить стек разработки.
          </p>

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
    <div className="skills">
      <h2 className="projects-title aboutme-title">skills</h2>
      <div className="skills-wrapper">
        <div className="skills-wrapper-tablet aboutme-tablet">
          <div className="skills-wrapper-tablet-box">
            <h4 className="tablet-title">Languages</h4>
            <p className="title-undertitle">
            TypeScript, JavaScript
            </p>
          </div>
          {/* <div className="skills-wrapper-tablet-box">
            <h4 className="tablet-title">Databases</h4>
            <p className="title-undertitle">CSS JAVASCRIPT C++ PYTHON</p>
          </div> */}
          <div className="skills-wrapper-tablet-box">
            <h4 className="tablet-title">Tools</h4>
            <p className="title-undertitle">
            VS Code, Figma, Git, Font Awesome
            </p>
          </div>
          <div className="skills-wrapper-tablet-box">
            <h4 className="tablet-title">Other</h4>
            <p className="title-undertitle">CSS, HTML, SCSS, SASS </p>
          </div>
          <div className="skills-wrapper-tablet-box">
            <h4 className="tablet-title">Frameworks</h4>
            <p className="title-undertitle">React,Vue</p>
          </div>
        </div>
      </div>
    </div>
    <div className="contacts">
      <h4 className="projects-title">Contacts</h4>
      <div className="contacts-wrapper">
        <div className="contacts-text">
          <p className="title-undertitle">
          Меня интересуют различные проекты. Если у вас есть какие-либо вопросы, пожалуйста, не стесняйтесь связываться со мной.
          </p>
        </div>
        {/* <div className="contacts-message">
          <h4>Message me here</h4>
          <ul className="contacts-message-list">
            <li className="contacts-message-li">
              <FontAwesomeIcon icon={faDiscord} className="contact-margin" />
              !Elias#3519
            </li>
            <li className="contacts-message-li">
              <FontAwesomeIcon icon={faMessage} className="contact-margin" />
              elias@elias.me
            </li>
          </ul>
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default AboutMe;

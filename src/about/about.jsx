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
            Hello, i’m Elias!<br></br> <br></br> <br></br>I’m a self-taught
            front-end developer based in Kyiv, Ukraine. I can develop responsive
            websites from scratch and raise them into modern user-friendly web
            experiences.
            <br></br>
            <br></br>
            <br></br>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <button className="main-title-button">
            Read more <FontAwesomeIcon icon={faArrowRight} />
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

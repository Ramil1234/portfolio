import "../skills/skills.sass";
import imgPurple from "../img/purple-icon.svg";
function Skills() {
  return (
    <div className="skills">
      <h2 className="projects-title">skills</h2>
      <div className="skills-wrapper">
        <div className="skills-wrapper-img">
          <img src={imgPurple} alt="#" />
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
          <div className="dots right-pos">
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
          <div className="square xl"></div>
          <div className="square l"></div>
        </div>
        <div className="skills-wrapper-tablet">
          <div className="skills-wrapper-tablet-box">
            <h4 className="tablet-title">Languages</h4>
            <p className="title-undertitle">
              TypeScript, JavaScript
            </p>
          </div>
          {/* <div className="skills-wrapper-tablet-box">
            <h4 className="tablet-title">Databases</h4>
            <p className="title-undertitle">JavaScript, </p>
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
            <p className="title-undertitle">React, Vue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

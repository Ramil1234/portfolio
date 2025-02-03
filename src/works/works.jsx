import './works.sass'
import ProjectBoxGrid from '../projects/project-box.jsx'
import imgBox1 from "../img/box-img.jpg";
import imgBox2 from "../img/box-img2.jpg";
import imgBox3 from "../img/box-img3.jpg";
function Works() {
  return (
    <div className="works">
        <div className="works-title-wrapper">
            <h3 className="works-title">projects</h3>
            <span>List of my projects</span>
        </div>
        <div className="works-grid">
            <h3 className="works-title works-grid-title">complete-apps</h3>
            <div className="works-grid-wrapper">
                <ProjectBoxGrid
            title="ChertNodes"
            underTitle="HTML, CSS, Python"
            imgSrc={imgBox1}
            underText={"Minecraft servers hosting "}
            ></ProjectBoxGrid>
            <ProjectBoxGrid
            title="ProtectX"
            underTitle="HTML, CSS, React"
            imgSrc={imgBox2}
            underText={"Discord anti-crash bot "}
            ></ProjectBoxGrid>
            <ProjectBoxGrid
            title="Kahoot Answers Viewer"
            underTitle="HTML, CSS"
            imgSrc={imgBox3}
            underText={"Get answers to your kahoot quiz"}
            ></ProjectBoxGrid>
                        <ProjectBoxGrid
            title="Kahoot Answers Viewer"
            underTitle="HTML, CSS"
            imgSrc={imgBox3}
            underText={"Get answers to your kahoot quiz"}
            ></ProjectBoxGrid>
            <ProjectBoxGrid
            title="ChertNodes"
            underTitle="HTML, CSS, Python"
            imgSrc={imgBox1}
            underText={"Minecraft servers hosting "}
            ></ProjectBoxGrid>
            </div>
        </div>
        <div className="small-works-grid">
        <h3 className="works-title works-grid-title">small-projects</h3>
          <div className="small-works-grid-wrapper">
              <div className="small-works-grid-box">
                <span className="small-works-grid-up">Discord JS TS</span>
                  <div className="small-works-grid-box-wrapper">
                    <h4 className="small-works-title">Bot boilerplate</h4>
                    <p className="small-works-text">Start creating scalable discord.js bot with typescript in seconds</p>
                    <button className="main-title-button"><span>GitHib{" <~>"}</span></button>
                  </div>
              </div>
              <div className="small-works-grid-box">
                <span className="small-works-grid-up">VUE CSS TS</span>
                  <div className="small-works-grid-box-wrapper">
                    <h4 className="small-works-title">My blog</h4>
                    <p className="small-works-text">Front-end of my future blog website written in vue</p>
                    <button className="main-title-button"><span>GitHib{" <~>"}</span></button>
                  </div>
              </div>
              <div className="small-works-grid-box">
                <span className="small-works-grid-up">Figma</span>
                  <div className="small-works-grid-box-wrapper">
                    <h4 className="small-works-title">Chess pro</h4>
                    <p className="small-works-text">Figma landing page about service for viewing chess tournaments</p>
                    <button className="main-title-button"><span>GitHib{" <~>"}</span></button>
                  </div>
              </div>
              <div className="small-works-grid-box">
                <span className="small-works-grid-up">Figma</span>
                  <div className="small-works-grid-box-wrapper">
                    <h4 className="small-works-title">Crash protect website</h4>
                    <p className="small-works-text">Figma template for website about anti-raid, anti-crash discord bot</p>
                    <button className="main-title-button"><span>GitHib{" <~>"}</span></button>
                  </div>
              </div>
              <div className="small-works-grid-box">
                <span className="small-works-grid-up">HTML, CSS</span>
                  <div className="small-works-grid-box-wrapper">
                    <h4 className="small-works-title">CSS expirements</h4>
                    <p className="small-works-text">Collection of my different little projects in css</p>
                    <button className="main-title-button"><span>GitHib{" <~>"}</span></button>
                  </div>
              </div>
              <div className="small-works-grid-box">
                <span className="small-works-grid-up">VUE CSS TS</span>
                  <div className="small-works-grid-box-wrapper">
                    <h4 className="small-works-title">My blog</h4>
                    <p className="small-works-text">Front-end of my future blog website written in vue</p>
                    <button className="main-title-button"><span>GitHib{" <~>"}</span></button>
                  </div>
              </div>
              <div className="small-works-grid-box">
                <span className="small-works-grid-up">HTML, CSS</span>
                  <div className="small-works-grid-box-wrapper">
                    <h4 className="small-works-title">CSS expirements</h4>
                    <p className="small-works-text">Collection of my different little projects in css</p>
                    <button className="main-title-button"><span>GitHib{" <~>"}</span></button>
                  </div>
              </div>
              <div className="small-works-grid-box">
                <span className="small-works-grid-up">Discord JS TS</span>
                  <div className="small-works-grid-box-wrapper">
                    <h4 className="small-works-title">Bot boilerplate</h4>
                    <p className="small-works-text">Start creating scalable discord.js bot with typescript in seconds</p>
                    <button className="main-title-button"><span>GitHib{" <~>"}</span></button>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Works;

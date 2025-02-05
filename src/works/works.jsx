import './works.sass'
import ProjectBoxGrid from '../projects/project-box.jsx'
import imgBox1 from "../img/factory.png";
import imgBox2 from "../img/game-club.png";
import imgBox3 from "../img/organicVegetables.png";
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
          title="Factory"
          underTitle="HTML, CSS(SASS), JS(React)"
          imgSrc={imgBox1}
          underText={"Доставка строительных инструментов"}
        ></ProjectBoxGrid>
        <ProjectBoxGrid
          title="GameClub"
          underTitle="HTML, CSS(SASS), JS"
          imgSrc={imgBox2}
          underText={"Игровая станция"}
        ></ProjectBoxGrid>
        <ProjectBoxGrid
          title="Organic Vegetabel"
          underTitle="HTML, CSS(SASS), JS"
          imgSrc={imgBox3}
          underText={"Organic"}
        ></ProjectBoxGrid>
            </div>
        </div>
        {/* <div className="small-works-grid">
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
        </div> */}
    </div>
  )
}

export default Works;

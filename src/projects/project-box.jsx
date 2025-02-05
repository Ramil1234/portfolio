import "./project.sass";
function ProjectBoxGrid({ underTitle, title, underText, imgSrc }) {
  return (
    <div className="projects-grid">
      <div className="project-grid-box">
        <div className="project-grid-box-wrapper">
          <img src={imgSrc} alt="" className="project-grid-box-wrapper-img" />
          <div className="title-undertitle undertitle-p8">{underTitle}</div>
          <div className="project-grid-box-untitle">
            <h3>{title}</h3>
            <span className="title-undertitle">{underText}</span>
            {/* <button className="main-title-button"><span>Live {" <~>"}</span></button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBoxGrid;

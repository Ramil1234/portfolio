import "../projects/project.sass";
import ProjectBoxGrid from "./project-box.jsx";
import imgBox1 from "../img/factory.png";
import imgBox2 from "../img/game-club.png";
import imgBox3 from "../img/organicVegetables.png";
function ProjectBox() {
  return (
    <div className="project-box">
      <h2 className="projects-title">projects</h2>
      <div className="project-box-wrapper">
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
  );
}

export default ProjectBox;

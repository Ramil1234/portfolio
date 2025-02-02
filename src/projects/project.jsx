import "../projects/project.sass";
import ProjectBoxGrid from "./project-box.jsx";
import imgBox1 from "../img/box-img.jpg";
import imgBox2 from "../img/box-img2.jpg";
import imgBox3 from "../img/box-img3.jpg";
function ProjectBox() {
  return (
    <div className="project-box">
      <h2 className="projects-title">projects</h2>
      <div className="project-box-wrapper">
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
      </div>
    </div>
  );
}

export default ProjectBox;

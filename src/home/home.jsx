import MainTitle from "../main-title/mainTitle.jsx";
import ProjectBox from "../projects/project.jsx";
import Skills from "../skills/skills.jsx";
import About from "../about/about.jsx";
import Contacts from "../contacts/contacts.jsx";
function Home() {
  return (
    <>
      <MainTitle></MainTitle>
      <ProjectBox></ProjectBox>
      <Skills></Skills>
      <About></About>
      <Contacts></Contacts>
    </>
  );
}

export default Home;

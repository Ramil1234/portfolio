import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/home.jsx'
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx'
import Works from './works/works.jsx'
import AboutMe from './aboutMe/aboutme.jsx'
import Contacts2 from './contacts2/contacts2.jsx';
function App() {
  return (
    <div className="App">
        <Header></Header>
      {/* <Home>
      </Home> */}
      {/* <Works></Works> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/works' element={<Works></Works>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/contacts' element={<Contacts2></Contacts2>}></Route>
      </Routes>
      <Footer></Footer>
      </div>
)}

export default App;

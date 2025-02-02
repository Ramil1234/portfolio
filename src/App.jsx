import "./App.css";
import Home from "./home/home.jsx";
import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
function App() {
  return (
    <>
      <div className="square-gl"></div>
      <div className="square-gs"></div>
      <div className="line-gl"></div>
      <div className="App">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

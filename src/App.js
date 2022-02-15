import './App.css';
import Header from "./components/header";
import Photo_brief from "./components/photo_brief";
import About_name from "./components/about_name";
import About from "./components/about";
import Techs from "./components/techs";
import Education from "./components/education";
import College from "./components/college";
function App() {
  return (
    <div className="App">
        <Header />
        <Photo_brief />
        <About_name />
        <About />
        <Techs />
        <Education />
        <College />
    </div>
  );
}

export default App;

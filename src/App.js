import './App.css';
import Header from "./components/header";
import Photo_brief from "./components/photo_brief";
import About_name from "./components/about_name";
import About from "./components/about";
function App() {
  return (
    <div className="App">
      <Header />
      <Photo_brief />
      <About_name />
      <About />
    </div>
  );
}

export default App;

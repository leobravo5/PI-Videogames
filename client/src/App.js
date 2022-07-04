import './App.css';
import {Route,Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
import Details from "./components/Details/Details";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/create" element={<CreateVideogame/>}/>
        <Route exact path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;

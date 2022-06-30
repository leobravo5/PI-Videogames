import './App.css';
import {Route,Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
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
        {/* <Route exact path={"/"}>
          <LandingPage/>
        </Route>
        <Route path={"/create"}>
          <CreateVideogame/>
        </Route>
        <Route path={"/details/:id"}>
          <Details/>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;

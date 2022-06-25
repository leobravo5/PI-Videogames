import './App.css';
import {Route,} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
import Details from "./components/Details/Details";


function App() {
  return (
    <div className="App">
        <Route exact path={"/home"}>
          <Home/>
        </Route>
        <Route exact path={"/"}>
          <LandingPage/>
        </Route>
        <Route path={"/create"}>
          <CreateVideogame/>
        </Route>
        <Route path={"/details/:id"}>
          <Details/>
        </Route>
    </div>
  );
}

export default App;

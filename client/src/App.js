import './App.css';
import {BrowserRouter as Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
import Details from "./components/Details/Details";


function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <LandingPage/>
      </Route>
      <Route exact path="/videogames" component={Home}/>
      <Route exact path="/videogames/:id" component={Details}/>
      <Route exact path="/create" component={CreateVideogame}/>
    </div>
  );
}

export default App;

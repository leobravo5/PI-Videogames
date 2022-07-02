import React from 'react'
import Landing from "../img/LandingPage.jpg";
import {Link} from "react-router-dom"
import s from "./LandingPage.module.css";
function LandingPage() {
  return (
    <div>
      <div className={s.container}>
        <img className={s.img} src={Landing} alt="landgingPage" />
          <h1 className={s.title}>Welcome to Videogames P.I.</h1>
          <h2 className={s.title2} >press start to continue</h2>
          <Link to="/home">
            <button className={s.btn}>START</button>
          </Link>
      </div>
    </div>
  )
}

export default LandingPage
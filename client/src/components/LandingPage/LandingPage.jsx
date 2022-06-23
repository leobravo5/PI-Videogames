import React from 'react'
import Landing from "../img/LandingPage.jpg";
import {Link} from "react-router-dom"
import s from "./LandingPage.module.css";
function LandingPage() {
  return (
    <div className={s.container}>
      <img className={s.img} src={Landing} alt="landgingPage" />
      <div>
        <h1 className={s.title}>Estas en la LANDING PAGE PUTITA</h1>
        <Link to="/home">
          <button className={s.btn}>HOME</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
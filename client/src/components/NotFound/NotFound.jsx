import React from 'react'
import bgnd from "../img/neonbg2.0.png";
import s from "./NotFound.module.css";
import notSonic from "../img/option2.gif"
import {Link} from "react-router-dom";
function NotFound() {
  return (
    <div className={s.container}>
      <img className={s.img} src={bgnd} alt="background" />
      <img className={s.sonic} src={notSonic} alt="Not Found!"/>
      <h1 className={s.title}>OOPS! Page Not Found</h1>
      <h2 className={s.title2}>Press "Return" to go to Home</h2>
      <Link to="/home">
        <button className={s.btn}>RETURN</button>
      </Link>

    </div>
  )
}

export default NotFound
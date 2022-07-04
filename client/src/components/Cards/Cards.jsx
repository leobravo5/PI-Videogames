import React from 'react'
import s from "./Cards.module.css";
import { Link } from "react-router-dom";
import notf from "../img/tanjiro.jpg";

function Cards({game}) {
  return (
    <div className={s.container}>
      <div>
        <Link className={s.link} to={`/details/${game.id}`}>
          {game.name}
        </Link>
      </div>
      {game.image ? (
        <img src={game.image} alt="game img" className={s.img}/>
      ):(<img src={notf} alt="game img" className={s.img}/>)}
      <div className={s.text}>{game.genres}</div>
    </div>
  )
}

export default Cards
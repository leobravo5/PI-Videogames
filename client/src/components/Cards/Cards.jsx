import React from 'react'
import s from "./Cards.module.css";
import { Link } from "react-router-dom";

function Cards({game}) {
  return (
    <div className={s.container}>
      <div>
        <Link to={`/details/${game.id}`}>
          {game.name}
        </Link>
      </div>
      <img src={game.image} alt=" " className={s.img}/>
      <div>{game.genres}</div>
    </div>
  )
}

export default Cards
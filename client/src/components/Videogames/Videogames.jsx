import React from 'react'
import Cards from '../Cards/Cards';
import Loading from '../Loading/Loading';
import s from "../Cards/Cards.module.css";

function Videogames({videogames}) {
  return (
    <div className={s.contains}>
        {
            videogames.length > 0 ?
            videogames.map(e=><Cards key={e.id} game = {e}/>)
            : <Loading />
        }
    </div>
  );
}

export default Videogames
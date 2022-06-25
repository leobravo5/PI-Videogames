import React ,{useEffect , useState} from 'react';
// import {NavLink} from 'react-router-dom';
import Cards from "../Cards/Cards";
import s from "../Cards/Cards.module.css";
// import NavBar from '../NavBar/NavBar';
import {useSelector,useDispatch} from 'react-redux';
import { getVideogames } from '../../actions';

function Home() {

  const videogames = useSelector((state)=>state.videogames);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getVideogames());
  },[dispatch]);


  return (
    <div className={s.contains}>
      {/* <h1>HOLA</h1> */}
      {
        videogames.length > 0 && videogames.map(e=><Cards key={e.name} game = {e}/>)
      }
    </div>
  )
}

export default Home
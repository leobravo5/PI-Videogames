import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogames } from '../../actions';
import FilterGenres from './Filters/FilterGenres';
import FilterCreator from './Filters/FilterCreator';
import SortAlpha from './Filters/SortAlpha';
import SortRating from './Filters/SortRating';
import s from "./NavBar.module.css";

function NavBar({setPage,setOrder,setInput}) {
  const dispatch = useDispatch();

  function resetFilters(e){
    e.preventDefault();
    dispatch(getVideogames())
    setPage(1);
    setInput(1)
  }


  return (
    <div className={s.container} >
      {/* <span className={s.videogames}>VIDEOGAMES</span> */}
      <span>Filter By:</span>
      <FilterGenres setPage={setPage} setInput={setInput} />
      <FilterCreator setPage={setPage} setInput={setInput} />
      <button className={s.reset} onClick={(e)=>resetFilters(e)}>
        RESET FILTERS
      </button>
      <span>Sort By:</span>
      <SortAlpha setOrder={setOrder} setPage={setPage} />
      <SortRating setOrder={setOrder} setPage={setPage}/>
      <Link to="/create">
        <button className={s.create}>CREATE VIDEOGAME</button>
      </Link>
    </div>
  )
}

export default NavBar
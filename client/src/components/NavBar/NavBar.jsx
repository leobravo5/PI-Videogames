import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogames } from '../../actions';
import FilterGenres from './Filters/FilterGenres';
import FilterCreator from './Filters/FilterCreator';
import SortAlpha from './Filters/SortAlpha';
import SortRating from './Filters/SortRating';
import s from "./NavBar.module.css";

function NavBar({setPage,setOrder,setInput,order}) {
  const dispatch = useDispatch();

  function resetFilters(e){
    e.preventDefault();
    dispatch(getVideogames())
    setPage(1);
    setInput(1)
  }


  return (
    <div className={s.container} >
      <span>Filter By:</span>
      <FilterGenres setPage={setPage} setInput={setInput} />
      <FilterCreator setPage={setPage} setInput={setInput} />
      <button className={s.reset} onClick={(e)=>resetFilters(e)}>
        RESET FILTERS
      </button>
      <span>Sort By:</span>
      <SortAlpha setOrder={setOrder} order={order} setPage={setPage} />
      <SortRating setOrder={setOrder} order={order} setPage={setPage}/>
      <Link to="/create">
        <button className={s.create}>CREATE VIDEOGAME</button>
      </Link>
    </div>
  )
}

export default NavBar
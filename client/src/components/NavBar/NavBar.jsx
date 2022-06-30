import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogames } from '../../actions';
import FilterGenres from './Filters/FilterGenres';
import SortAlpha from './Filters/SortAlpha';
import SortRating from './Filters/SortRating';

function NavBar({setPage,setOrder}) {
  const dispatch = useDispatch();

  function resetFilters(e){
    e.preventDefault();
    dispatch(getVideogames())
    setPage(1);
  }


  return (
    <div>
      <FilterGenres setPage={setPage} />
      <SortAlpha setOrder={setOrder} setPage={setPage} />
      <SortRating setOrder={setOrder} setPage={setPage}/>
      <button onClick={(e)=>resetFilters(e)}>
        Reset
      </button>
      <Link to="/create">
        <button>Create a Videogame</button>
      </Link>
    </div>
  )
}

export default NavBar
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByGenre, getGenres } from '../../../actions';

function FilterGenres({setPage,setInput}) {

  const dispatch = useDispatch();
  const genres = useSelector((state)=>state.genres);

  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch]);

  const handleGenre = e => {
    e.preventDefault();
    dispatch(filterByGenre(e.target.value))
    setPage(1);
    setInput(1);
  }

  return (
    <div>
        <select onChange={(e) => handleGenre(e)}>
            <option value="All">All Genres</option>
            {
                genres.map((g)=>{
                    return (
                     <option value={g.name} key={g.id}>
                        {g.name}
                     </option>   
                    );
                })
            }
        </select>
    </div>
  )
}

export default FilterGenres
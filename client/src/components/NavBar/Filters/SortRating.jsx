import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByRating } from '../../../actions';

function SortRating({setOrder,setPage,order}) {

  const dispatch = useDispatch();

  function handleRating(e){
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setOrder(e.target.value)
    // setPage(1)
}

  return (
    <div>
      <select onChange={(e)=>handleRating(e)}>
            <option hidden value="">
                Rating
            </option>
            <option value='Ascending'>Ascending</option>
            <option value='Descending'>Descending</option>
        </select>
    </div>
  )
}

export default SortRating
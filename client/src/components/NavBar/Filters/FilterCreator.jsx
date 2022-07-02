import React from 'react'
import { useDispatch } from 'react-redux'
import { filterByCreator } from '../../../actions';

function FilterCreator({setPage,setInput}) {
  const dispatch = useDispatch();
  const handleChange = e => {
    e.preventDefault();
    dispatch(filterByCreator(e.target.value))
    setPage(1);
    setInput(1);
  }
  return (
    <div>
        <select onChange={(e) => handleChange(e)}>
            <option value="All">All Origins</option>
            <option value="Created">Created</option>
            <option value="Api">Api</option>
        </select>
    </div>
  )
}

export default FilterCreator
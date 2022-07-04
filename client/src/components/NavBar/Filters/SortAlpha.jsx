import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByAlph } from '../../../actions';

function SortAlpha({setOrder,setPage,order}) {

    const dispatch = useDispatch();

    function handleAlpha(e){
        e.preventDefault();
        dispatch(orderByAlph(e.target.value));
        setOrder(e.target.value)
        // setPage(1)
    }

  return (
    <div>
        <select onChange={(e)=>handleAlpha(e)}>
            <option hidden value="">
                Alphabetical
            </option>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
        </select>
    </div>
  )
}

export default SortAlpha
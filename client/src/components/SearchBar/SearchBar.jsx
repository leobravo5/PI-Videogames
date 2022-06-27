import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getByName } from '../../actions';



function SearchBar() {

    const dispatch = useDispatch();
    const [name,setName] = useState("");

    function handleSearch(e){
        e.preventDefault();
        setName("");
        setName(e.target.value)
    }

    function handleEnter(e) {
        if (e.key === "Enter"){
            handleSubmit(e);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getByName(name));
        setName("");
    }

  return (
    <div>
        <input
            type="text"
            placeholder='Search game...'
            value={name}
            onKeyPress={handleEnter}
            onChange={(e)=>handleSearch(e)}
        />
        <button
            type="submit"
            onClick={(e)=>handleSubmit(e)}
        />
    </div>
  )
}

export default SearchBar
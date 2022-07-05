import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getByName } from '../../actions';
import s from "./SearchBar.module.css";


function SearchBar({setPage}) {

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

    async function handleSubmit(e) {
        e.preventDefault();
        if(!name){
            alert("SearchBar is empty!")
        }else{
            await dispatch(getByName(name));
            setPage(1);
            setName("");
        }
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
            className={s.search_btn}
            type="submit"
            onClick={(e)=>handleSubmit(e)}
        >
            Search    
        </button>
    </div>
  )
}

export default SearchBar
import React, { useState } from 'react'
import s from "./Pagination.module.css";


function Pagination({page,pageSize,setPage,totalCount}) {
    const [input,setInput] = useState(1);
    const totalPages = Math.ceil(totalCount/pageSize);

    const prevPage = ()=>{
        setInput(input - 1)
        setPage(page - 1)
    }

    const nextPage = ()=>{
        setInput(input + 1)
        setPage(page + 1)
    }

    // const handleEnter = e =>{
    //     if (e.key === "Enter")
    // }

  return (
    <div>
        <button onClick={prevPage}></button>
        <input value={input}/>
        <p> out of {totalPages}</p>
        <button onClick={nextPage}></button>
    </div>
  )
}

export default Pagination
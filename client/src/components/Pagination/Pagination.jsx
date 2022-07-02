import React, { useState } from 'react'
import s from "./Pagination.module.css";


function Pagination({page,pageSize,setPage,totalCount,setInput,input}) {
    // const [input,setInput] = useState(1);
    const totalPages = Math.ceil(totalCount/pageSize);

    const prevPage = ()=>{
        setInput(input - 1)
        setPage(page - 1)
    }

    const nextPage = ()=>{
        setInput(input + 1)
        setPage(page + 1)
    }

    const handleEnter = e =>{
        if (e.key === "Enter"){
          setPage(parseInt(e.target.value))
          if(
            parseInt(e.target.value) <1 || 
            parseInt(e.target.value) > totalPages || 
            isNaN(parseInt(e.target.value))
          ) {
            setPage(1);
            setInput(1);
          } else{
            setPage(parseInt(e.target.value));
          }
        }
    }

    const onChange = e =>{
      setInput(e.target.value)
    }

  return (
    <div className={s.container}>
        <button className={s.btn} disabled={page===1 || page < 1} onClick={prevPage}>Prev</button>
        <input className={s.input} value={input} onChange={(e)=> onChange(e)} onKeyPress={handleEnter} />
        <p className={s.text} > out of {totalPages}</p>
        <button className={s.btn} disabled={page===totalPages || page > totalPages} onClick={nextPage}>Next</button>
    </div>
  )
}

export default Pagination
import React from 'react'
import s from "./Pagination.module.css";


function Pagination({page,pageSize,setPage,totalCount,setInput,input}) {

    const totalPages = Math.ceil(totalCount/pageSize);

    const prevPage = ()=>{
        setInput(input - 1)
        setPage(page - 1)
    }

    const nextPage = ()=>{
        setInput(input + 1)
        setPage(page + 1)
    }

    const firstPage = ()=>{
      setInput(1);
      setPage(1);
    }

    const lastPage = ()=>{
      setInput(totalPages);
      setPage(totalPages);
    }


  return (
    <div className={s.container}>
        <button className={s.btn} disabled={page===1 || page < 1} onClick={firstPage}>First</button>
        <button className={s.btn} disabled={page===1 || page < 1} onClick={prevPage}>Prev</button>
        <p className={s.text} > {page} out of {totalPages}</p>
        <button className={s.btn} disabled={page===totalPages || page > totalPages} onClick={nextPage}>Next</button>
        <button className={s.btn} disabled={page===totalPages || page > totalPages} onClick={lastPage}>Last</button>
    </div>
  )
}

export default Pagination
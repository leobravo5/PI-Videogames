import React from 'react'
import sLoading from "../img/sonic-loading.gif";
import bgnd from "../img/neonbg2.0.png";
import s from "./Loading.module.css";
import { useEffect } from 'react';
function Loading({setLoading}) {

  // if(videogames.length>0){
  //   setLoading(false)
  // }

  useEffect(()=>{
    return ()=>{
      setLoading(false)
    }
  })

  return (
    <div className={s.container}>
      <img className={s.img} src={bgnd} alt="background" />
      <img className={s.sonic} src={sLoading} alt="loading..."/>
      <h1 className={s.title}>Loading please wait...</h1>
      {setTimeout(() => {
        setLoading(false);
        }, 7600)}
    </div>
  )
}

export default Loading
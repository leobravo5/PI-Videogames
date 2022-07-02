import React from 'react'
import sLoading from "../img/sonic-loading.gif";
import bgnd from "../img/neonbg2.0.png";
import s from "./Loading.module.css";
function Loading(/*{setLoading}*/) {
  return (
    <div className={s.container}>
      <img className={s.img} src={bgnd} alt="background" />
      <img className={s.sonic} src={sLoading} alt="loading..."/>
      <h1 className={s.title}>Loading please wait...</h1>
        
        {/* {setTimeout(() => {
            setLoading(false);
          }, 1600)} */}
    </div>
  )
}

export default Loading
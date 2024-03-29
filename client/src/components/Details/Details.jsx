import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,Link } from 'react-router-dom';
import { clearPage, getDetails } from '../../actions';
import s from "./Details.module.css";
import Loading from '../Loading/Loading';
import notf from "../img/tanjiro.jpg";


function Details() {

  const { id } = useParams();
  const details = useSelector((state)=>state.details);
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    dispatch(getDetails(id));
    return ()=>{
      dispatch(clearPage())
    }
  },[dispatch,id]);

  
  return (
    <div>
      {
        !loading && Object.values(details).length>0 ? (
        <div className={s.container}>
            <h1 className={s.title} >{details.name}</h1>
            {details.image ? (
            <img className={s.img} src={details.image} alt="game IMG" />
            ):(<img className={s.img} src={notf} alt="game IMG"/>)}
            <div>
              <h2 className={s.props} >Genres: <span className={s.data}>{details.genres}</span></h2>
              <h2 className={s.props} >Rating: <span className={s.data}>{details.rating}</span></h2>
              <h2 className={s.props} >Release Date: <span className={s.data}>{details.release_date || details.released}</span></h2>
              <h2 className={s.props} >Platforms: <span className={s.data}>{details.platforms}</span></h2>
            </div>
            <div className={s.container2} >
              <h3 className={s.text_title} >Description</h3>
              <p className={s.text} >{details.description}</p>
            </div>
            <Link to="/home">
              <button className={s.btn} >🡸HOME</button>
            </Link>
        </div>
    ): <Loading setLoading={setLoading} />
      }
    </div>
  )
}

export default Details
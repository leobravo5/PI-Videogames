import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getDetails } from '../../actions';



function Details() {

  const { id } = useParams();
  const details = useSelector((state)=>state.details);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getDetails(id));
  },[dispatch,id]);

  
  return (
    <div>
      {
      details !== undefined ? (
        <div>
            <h1>{details.name}</h1>
            <img src={details.image} alt="bokita" />
        </div>
    ): <h1>{details.name}</h1>
      }
    </div>
  )
}

export default Details
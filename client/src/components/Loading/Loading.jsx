import React from 'react'
import sLoading from "../img/sonic-loading.gif";
function Loading(/*{setLoading}*/) {
  return (
    <div>
        <img src={sLoading} alt="loading..."/>
        
        {/* {setTimeout(() => {
            setLoading(false);
          }, 1600)} */}
    </div>
  )
}

export default Loading
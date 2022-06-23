import { GET_VIDEOGAMES,GET_GENRES,GET_DETAILS,CLEAR_PAGE } from "./constants";
import axios from "axios";

export function getVideogames(){
    return async (dispatch)=>{
        var json = await axios.get("/videogames");
        return dispatch ({
            type:GET_VIDEOGAMES,
            payload:json.data
        })
    }
}


export function getGenres(){
    return async (dispatch)=>{
        var json = await axios.get("/genres");
        return dispatch ({
            type:GET_GENRES,
            payload:json.data
        })
    }
}

export function getDetails(id){
    return async (dispatch)=>{
        var json = await axios.get(`/videogames/${id}`);
        return dispatch ({
            type:GET_DETAILS,
            payload:json.data
        })
    }
}

export function clearPage(){
    return {
        type:CLEAR_PAGE
    }
}
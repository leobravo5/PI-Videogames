import { GET_VIDEOGAMES,GET_GENRES,GET_DETAILS,
    CLEAR_PAGE,GET_NAME,FILTER_BY_GENRE,
    FILTER_BY_CREATOR,ORDER_RATING,ORDER_ALPHA } from "./constants";
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

export function getByName(name){
    return async (dispatch)=>{
        var json = await axios.get(`/videogames?name=${name}`);
        return dispatch ({
            type:GET_NAME,
            payload:json.data
        })
    }
}

export function getDetails(id){
    return async (dispatch)=>{
        var json = await axios.get(`/videogame/${id}`);
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

export function filterByGenre(genre){
    return{
        type:FILTER_BY_GENRE,
        payload:genre
    }
}

export function orderByAlph(type){
    return{
        type:ORDER_ALPHA,
        payload:type
    }
}

export function orderByRating(type){
    return{
        type:ORDER_RATING,
        payload:type
    }
}
import { GET_VIDEOGAMES,GET_GENRES,GET_DETAILS,CLEAR_PAGE } from "../actions/constants";


const initialState = {
    allVideogames:[],
    videogames:[],
    genres:[],
    details:[]
}

const rootReducer = (state = initialState, action) =>{

    switch(action.type){


        case GET_VIDEOGAMES:
            return{
                ...state,
                allVideogames:action.payload,
                videogames:action.payload,
            } 
        case GET_GENRES:
            return{
                ...state,
                genres:action.payload
            }
        case GET_DETAILS:
            return{
                ...state,
                details:action.payload
            }
        case CLEAR_PAGE:
            return{
                ...state,
                details:[]
            }
        default: 
            return {...state}
    }
}


export default rootReducer;
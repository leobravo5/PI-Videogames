import { GET_VIDEOGAMES,GET_GENRES,GET_DETAILS,CLEAR_PAGE,GET_NAME,FILTER_BY_GENRE,
    FILTER_BY_CREATOR,
    ORDER_RATING, ORDER_ALPHA } from "../actions/constants";


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
        
        case GET_NAME:
            return{
                ...state,
                videogames:action.payload
            }
            
        case FILTER_BY_GENRE:
            const allVgms = state.allVideogames;
            const filteredVideogames = 
                action.payload === "All"
                ? allVgms
                : allVgms.filter(game=>
                    game.genres.includes(action.payload)
                );
            return{
                ...state,
                videogames:filteredVideogames
            }


        case ORDER_ALPHA:
            const sortAlph =
                action.payload === "A-Z"
                ? state.videogames.sort((a,b)=>a.name.localeCompare(b.name))
                : state.videogames.sort((a,b)=>b.name.localeCompare(a.name));
            return{
                ...state,
                videogames:sortAlph
            }

        case ORDER_RATING:
            const sortRating =
                action.payload ==="Ascending"
                    ? state.videogames.sort((a,b)=> a.rating - b.rating)
                    : state.videogames.sort((a,b)=> b.rating - a.rating);
            return{
                ...state,
                videogames:sortRating
            }
        
        default: 
            return {...state}
    }
}


export default rootReducer;
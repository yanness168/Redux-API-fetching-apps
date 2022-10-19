/* import {FETCH_API} from "../actiontypes"
import {GET_API} from "../actiontypes"; */
import { FETCH_MEMES_BEGIN, FETCH_MEMES_SUCCESS, FETCH_MEMES_FAILURE, STORE_NAME, STORE_URL, CLEAR_NAME, CLEAR_URL} from "../actiontypes";


const initialState = {
    items: [],
    urls: [],
    names: [],
    loading: false,
    error: 'No error',
    };
/* const initialState = {
    memeData: [],
    fetAPI: "",
    fetStatus: 'No data to render...',
}

export default function (state = initialState, action){
    switch (action.type) {
        case GET_API:
            return{
                ...state,
                fetAPI: action.link,
            }
        case FETCH_API:
            var tem, error;
            fetch(state.fetAPI)
                .then(response => response.json)
                .then(json => tem = json, error = "Completed!!!")
                .catch(err => error = err);
            return {
                ...state,
                memeData: [...state.memeData, tem],
                fetStatus: error,
            }
            break;
        default: return state;
            break;
    }
} */
export default function (state = initialState, action) {
    switch(action.type) {
      case FETCH_MEMES_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_MEMES_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.products,
          error: "Fetched successfully"
        };

      case FETCH_MEMES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: [],
        };
/*       case GET_URL:
        var s = action.payload.link;
        return {
          ...state,
          u: s,
        }; */

      case STORE_URL:
        var s = action.payload.append;
        return {
          ...state,
          urls: [...state.urls, s],
        };
      case STORE_NAME:
        var s = action.payload.append;
        return {
          ...state,
          names: [...state.names, s],
        };
      case CLEAR_NAME:{
        return{
          ...state,
          names: []
        }
      }
      case CLEAR_URL:{
        return{
          ...state,
          urls: []
        }
      }
      default:
        return state;
    }
  }


  
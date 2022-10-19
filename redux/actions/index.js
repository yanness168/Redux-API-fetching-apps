/* import { FETCH_API } from '../actiontypes/index'
import {GET_API} from '../actiontypes/index'

export const api_data = data =>({
    type: 'FETCH_API',
    payload: {
        json: data,
    }
})
export const api_url = url =>({
    type: 'GET_API',
    link: url,
    }
) */
import { FETCH_MEMES_BEGIN,
    FETCH_MEMES_SUCCESS,
    FETCH_MEMES_FAILURE,
    STORE_URL,
    CLEAR_URL,
    STORE_NAME,
    CLEAR_NAME } from "../actiontypes/index";

export const fetchMemesBegin = () => ({
    type: 'FETCH_MEMES_BEGIN'
  });
  
export const fetchMemesSuccess = products => ({
type: 'FETCH_MEMES_SUCCESS',
payload:  { products } 
});

export const fetchMemesFailure = error => ({
    type: 'FETCH_MEMES_FAILURE',
    payload: { error }
    });

export const store_url = url =>({
    type: 'STORE_URL',
    payload:{
        append: url
    }
});
/* export const get_url = link =>({
    type: 'GET_URL',
    payload:{ link }
}); */
export const store_name = name =>({
    type: 'STORE_NAME',
    payload:{
        append: name
    }
});
  
export const clear_name = ()=>(
    {
        type: 'CLEAR_NAME',
        payload: { },
    }
)
export const clear_url = ()=>(
    {
        type: 'CLEAR_URL',
        payload: { },
    }
)

/* export function fetchMemes() {
    return dispatch => {
        dispatch(fetchMemesBegin());
        return fetch('https://api.imgflip.com/get_memes')
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchMemesSuccess(json.data));
            console.log(json.data);
        })
        .catch(error => dispatch(fetchMemesFailure(error)));
    };
}

    // Handle HTTP errors since fetch won't.
    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    } */

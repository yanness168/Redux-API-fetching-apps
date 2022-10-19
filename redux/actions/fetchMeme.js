
import {fetchMemesBegin, fetchMemesSuccess, fetchMemesFailure} from './index';

export const fetchMemes = () => {
    return dispatch => {
        dispatch(fetchMemesBegin());
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchMemesSuccess(res.data.memes));
            return res.data.memes;
        })
        .catch(error => {
            dispatch(fetchMemesFailure(error));
        })
    }
}
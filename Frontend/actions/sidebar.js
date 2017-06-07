import request from 'request';
const url = 'http://localhost:3000/categories/';
export const getMenu = () => dispatch => {
    request.get({url},
        function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            }
            let res = JSON.parse(body);
            if(res.length){
                dispatch({type: 'RELOAD_CATEGORIES', payload: res});
                dispatch({type: 'SET_CURRENT_CATEGORY', payload: 0});
            }
        });
};
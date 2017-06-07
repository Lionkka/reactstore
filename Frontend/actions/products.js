import request from 'request';
const url = 'http://localhost:3000/products/';
export const getMenu = (category) => dispatch => {
    request.get({url: url + category},
        function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            }
            let res = JSON.parse(body);

            if(res.categories.length){
                dispatch({type: 'RELOAD_CATEGORIES', payload: res.categories});
                dispatch({type: 'SET_PARENT_CATEGORY', payload: res.parent})
            }
        });
};
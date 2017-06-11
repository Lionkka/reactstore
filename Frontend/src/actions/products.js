import request from 'request';
const url = 'http://localhost:3000/products/';
export const getProducts = (category) => dispatch => {
    request.get({url: url+category},
        function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            }
            dispatch({type: 'RELOAD_PRODUCTS', payload: JSON.parse(body)});
        });
};
import request from 'request';
const url = 'http://localhost:3000/category/';
export const getMenu = () => dispatch => {
    request.get({url: url + '0'},
        function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            }
            let res = JSON.parse(body);
            console.log(res.categories);
            res.categories.forEach(item=> dispatch({ type: 'ADD', cat: item }));
        });
};

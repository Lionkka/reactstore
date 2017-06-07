const InitialState = {
    productsPerPage : 10,
    currentPage: 1,
    products: []
};
export default function (state = InitialState, action) {
    switch (action.type) {
        case 'RELOAD_PRODUCTS':
            state.products = action.payload;
            return state.products;
        default:
            console.log('default products case!!!');
            return state;

    }
}

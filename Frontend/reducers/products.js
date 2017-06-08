const InitialState = {
    products: [],
    currentProduct: null
};
export default function (state = InitialState, action) {
    switch (action.type) {
        case 'RELOAD_PRODUCTS':
            return {
                products: action.payload,
                currentProduct: null
            };

        case 'SET_CURRENT_PRODUCT':
            let currentProduct = state.products.filter((item) => {
                return item.id === action.payload;
            });
            currentProduct
                ? currentProduct = currentProduct[0]
                : currentProduct = action.payload;
            return {
                products: state.products,
                currentProduct
            };
        default:
            return state;

    }
}

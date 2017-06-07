const InitialState = {
    currentCategory: 0,
    currentMenu: [],
    allCategories: [],
    parentCategory: null
};

export default function (state = InitialState, action) {

    switch (action.type) {
        case 'RELOAD_CATEGORIES':
            return {
                currentCategory: state.currentCategory,
                allCategories: action.payload,
                currentMenu: [...state.currentMenu],
                parentCategory: state.parentCategory
            };
        case 'SET_CURRENT_CATEGORY':
            return {
                currentCategory: action.payload,
                allCategories: [...state.allCategories],
                currentMenu: [...state.currentMenu],
                parentCategory: state.parentCategory
            };
        case 'SET_PARENT_CATEGORY':

            let parent = allCategories.filter((item)=>{
                return item.id === action.payload;
            });
            console.log('SET_PARENT_CATEGORY', parent);
            return {
                currentCategory: state.currentCategory,
                allCategories: [...state.allCategories],
                currentMenu: [...state.currentMenu],
                parentCategory: parent
            };
        case 'SET_CURRENT_MENU':
            let newMenu = state.allCategories.filter((item)=>{
                return item.parent_id === action.payload;
            });
            if(newMenu.length > 0){
                return {
                    currentCategory: state.currentCategory,
                    allCategories: [...state.allCategories],
                    currentMenu: newMenu,
                    parentCategory: state.parentCategory
                };
            }
            else return state;

        default:
            return state;
    }
}

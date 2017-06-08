const InitialState = {
    currentCategory: 0,
    currentMenu: [],
    allCategories: [],
    parentCategory: 0,
    breadcrumbs:[]
};

export default function (state = InitialState, action) {

    switch (action.type) {
        case 'RELOAD_CATEGORIES':
            return {
                currentCategory: state.currentCategory,
                allCategories: action.payload,
                currentMenu: [...state.currentMenu],
                parentCategory: state.parentCategory,
                breadcrumbs:[...state.breadcrumbs]
            };
            break;

        case 'SET_CURRENT_CATEGORY':

            let newBreadcrumbs = getBreadcrumbs(action.payload, state.allCategories);

            let currentCategory = {};
            if(action.payload){
                currentCategory = state.allCategories.filter(item => item.id === action.payload)[0];
            }
            else {
                currentCategory.id = action.payload;
            }

            let newMenu = state.allCategories.filter((item) => {
                return item.parent_id === currentCategory.id;
            });

            console.log('newBreadcrumbs',newBreadcrumbs);
            let newParent = 0;
            if(newBreadcrumbs.length > 1 ){
                newParent = newBreadcrumbs[1]
            }

            if (newMenu.length === 0) {

                newMenu = state.allCategories.filter((item) => {
                    return item.parent_id === currentCategory.parent_id;
                })
            }
            return {
                currentCategory: currentCategory.id,
                allCategories: [...state.allCategories],
                currentMenu: newMenu,
                parentCategory: newParent,
                breadcrumbs: newBreadcrumbs.reverse()
            };
            break;

        default:
            return state;
    }
}


function getBreadcrumbs(currentCategory, allCategories) {
    let breadcrumbs = [];

    let current = currentCategory;
    do{
        allCategories.forEach((item)=>{
            if(item.id === current){
                breadcrumbs.push(item);
                current = item.parent_id;
            }
        })
    }
    while(current);

    //add home page
    breadcrumbs.push({
        id:0,
        slug:'',
        title:'Home'
    });
    return breadcrumbs;
}

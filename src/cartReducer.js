const cartReducer = (state, action)=>{
switch(action.type){
    case'ADD_TO_CART':
    return[...state, { ...action.product, quantity: 1 }];

    case 'INCREASE_QUANTITY':
        return state.map(item=>item.id === action.id?{...item,quantity:item.quantity+1}:item)
    
    case 'DECREASE_QUANTITY':
        return state.map(item => {
            if (item.id === action.id) {
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                } else {
                    return state.filter(item => item.id !== action.id);
                }
            } else {
                return item
            }
        })
    
    case 'REMOVE_FROM_CART':
        return state.filter(item => item.id !== action.id);
    
    case 'CLEAR_CART':
    return [];

    default:
    return state;
}
};
export default cartReducer;
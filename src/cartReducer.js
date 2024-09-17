const cartReducer = (state, action)=>{
switch(action.type){
    case'ADD_TO_CART':
    return[...state, { ...action.product, quantity: 1 }];

    case 'INCREASE_QUANTITY':
        return state.map(item=>item.id === action.id?{...item,quantity:item.quantity+1}:item)
    
    case 'DECREASE_QUANTITY':
        return state.map(item=>item.id === action.id && item.quantity>1 ?{...item,quantity:item.quantity-1}:item)
    
    case 'REMOVE_FROM_CART':
        return state.filter(item => item.id !== action.id);
    
    case 'CLEAR_CART':
    return [];

    default:
    return state;
}
};
export default cartReducer;
import * as actionTypes from './actions';

const initialState = {
    ingredients: [],
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
    breadMiddle: 0.1,
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.ingredientName
                ],
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            const ingredients = state.ingredients.reverse();
            const index = ingredients.indexOf(action.ingredientName);
            ingredients.splice(index, 1);
            return {
                ...state,
                ingredients: ingredients.reverse(),
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;
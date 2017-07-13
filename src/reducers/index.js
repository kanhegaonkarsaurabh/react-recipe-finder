import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE } from '../actions';

const INIT_STATE = [];

const recipes = (state=INIT_STATE, action) => {
  switch(action.type) {
    case SET_RECIPES:
      return action.items;
    default :
      return state;
  }
}

const favoriteRecipe = (state=INIT_STATE, action) => {
  switch(action.type) {
    case FAVORITE_RECIPE :
      return [...state, action.recipe];
    default:
      return state;
  }
}

const rootReducer = combineReducers({ recipes, favoriteRecipe });
export default rootReducer;

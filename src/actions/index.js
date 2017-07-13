export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

export const setRecipes = (items) => ({
  type : SET_RECIPES,
  items
});

export const favoriteRecipe = (recipe) => ({
  type: FAVORITE_RECIPE,
  recipe
});

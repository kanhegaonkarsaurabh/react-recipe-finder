import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class FavoriteRecipeList extends Component {
  renderFavoriteList() {
    let { favoriteRecipe } = this.props;
    return favoriteRecipe.map((recipe, index) => (
      <RecipeItem key={index} recipe={recipe} favrecipe={true} />
    ))
  }


  render() {
    return (
      <div>
        <h4>Favorite Recipes</h4>
        {this.renderFavoriteList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  favoriteRecipe : state.favoriteRecipe,
})

export default connect(mapStateToProps, null)(FavoriteRecipeList);

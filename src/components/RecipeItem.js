import React, { Component } from 'react';
import '../styles/index.css';
import '../styles/RecipeItem.css';
import { favoriteRecipe } from '../actions';
import { connect } from 'react-redux';

class RecipeItem extends Component {
  constructor() {
    super();

    this.state = {
      favorited : false,
    };

  }

  favorite = (recipe) => {
    this.props.favoriteRecipe(recipe);
    this.setState({
      favorited : true
    });
  }

  render() {
    let { recipe, favrecipe } = this.props;
    let { favorited } = this.state;
    return (
      <div className='recipe-item'>
      {  favrecipe ?
      <div></div>
      :

        favorited ?
        <div
        className='star'>
        &#9733;
        </div>
        :
        <div
        className='star'
        onClick = {() => this.favorite(recipe) }
        >
        &#9734;
        </div>
      }


        <div className='recipe-title'>
          <a href = {recipe.href}>
            <h4 > {recipe.title} </h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img src={recipe.thumbnail}
             alt={recipe.title}
             className='recipe-img'
        />
      </div>
    )
  }
}

export default connect(null, { favoriteRecipe })(RecipeItem);

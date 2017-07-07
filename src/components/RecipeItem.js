import React, { Component } from 'react';
import '../styles/index.css';
import '../styles/RecipeItem.css';

class RecipeItem extends Component {
  render() {
    let { recipe } = this.props;
    return (
      <div className='recipe-item'>
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

export default RecipeItem;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  renderList() {
    let { recipes } = this.props;
    return recipes.map((recipe, index) => (
        <RecipeItem key={index} recipe={recipe} favrecipe={false} />
    ))
  }

  render() {
    return (
      <div>
      {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}


export default connect(mapStateToProps, null)(RecipeList);

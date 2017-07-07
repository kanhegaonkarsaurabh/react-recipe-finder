import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';


class SearchRecipes extends Component {
  constructor() {
    super();

    this.state = {
      ingredients : '',
      dish : ''
    };
  }

  search() {
    let { ingredients, dish } = this.state;
    let { setRecipes } = this.props;
    const url = `http://recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    fetch(url,{
      method : 'GET'
    })
      .then(response => response.json())
      .then(json => setRecipes(json.results));

  }


  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {'   '}
          <FormControl type = "text"
            placeholder = "onion, fish"
            onChange = {(event) => this.setState({
              ingredients : event.target.value
            })}
            />


        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl
          type = "text"
          placeholder = "pasta"
          onChange = {(event) => this.setState({
            dish : event.target.value
          })}
          />
        </FormGroup>
        {' '}
        <Button onClick = {() => this.search()}>
          Submit
        </Button>



      </Form>
    )
  }

}

export default connect(null, { setRecipes })(SearchRecipes);

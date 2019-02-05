import React, { Component } from 'react';

class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
    };
  }

  render() {
    return (
      <li>{this.state.category.id} - {this.state.category.name}, {this.state.category.budget}</li>
    );
  }
}

export default CategoryItem;

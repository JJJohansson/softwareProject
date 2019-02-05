import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import FetchTestCategories from '../constants/FetchTestCategories';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    let categories = FetchTestCategories();
    this.setState({
      categories: categories
    })
  }

  render() {
    const items = this.state.categories.map((item, index) => {
      return <CategoryItem key={index} category={item} />;
    });

    return (
      <ul>{items}</ul>
    );
  }
}

export default CategoryList;

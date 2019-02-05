import React, { Component } from 'react';
import '../App.css';
import CategoryList from '../components/CategoryList';

class Categories extends Component {
  render() {
    return (
      <div className="App">
        <CategoryList />
      </div>
    );
  }
}

export default Categories;

import React, { Component } from 'react';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      budget: 0,
    }
  }

  componentDidMount() {
    this.getCategoryLength();
  }

  getCategoryLength() {
    let length = document.getElementsByClassName("categories")[0].children.length;
    console.log(length);
  }

  inputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  saveCategory = () => {
    console.log('saved!')
  }

  render() {
    return (
      <div className="addCategory">
        <form>
          <label>name: </label><input type="text"  name="name" size="20" onChange={this.inputChange}></input>
          <label>budget: </label><input type="text"  name="budget" size="20" onChange={this.inputChange}></input>
          <input type="button" onClick={this.saveCategory} value="SAVE" />
        </form>
      </div>
    );
  }
}

export default AddCategory;

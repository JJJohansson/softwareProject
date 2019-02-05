import React, { Component } from 'react';
import '../App.css';
import CategoryList from '../components/CategoryList';
import AddCategory from '../components/AddCategory';


class Categories extends Component {
  render() {
    return (
      <div className="App">
        <CategoryList />
        <AddCategory />
      </div>
    );
  }
}

export default Categories;

/*

  random recursion training..

<div className="test">
<button onClick={this.test}>press</button>
</div>


const nodes = [];

test = () => {
  let test = document.getElementsByTagName('body');
  this.iterate(test[0]);
  this.drawDOM();
}

iterate = (ele) => {
  calls++;
  nodes.push({
    parentClassName: ele.parentElement.className,
    parentTag: ele.parentElement.tagName,
    eleTag: ele.tagName,
    className: ele.className,
  });

  if (ele.children) {
    for (let child of ele.children) {
      this.iterate(child);
    }
  }
}

drawDOM = () => {
  console.log('nodes:\n',nodes)
  let tree;

  for (let node of nodes) {
    // create an object of the current node
    let element = {
      tag: node.eleTag,
      class: node.className,
      parent: {
        tag: node.parentTag,
        class: node.parentClassName
      },
      children: []
    };

    // get the root
    if (node.eleTag === 'BODY') {
      tree = element;
      continue;
    }
       
    // to be continued..
    
  }
  //  <!-- LOOP END -->

  console.log(tree)
}
*/

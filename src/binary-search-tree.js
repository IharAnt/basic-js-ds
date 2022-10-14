const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }


  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addNode(this.rootNode, data)
  }

  addNode(node, data) {
    if(!node) {
      return new Node(data);
    }

    if(node.data === data) {
      return node;
    }

    if(data < node.data) {
      node.left = this.addNode(node.left, data);
    } else {
      node.right = this.addNode(node.right, data);
    }

    return node;
  }

  has(data) {
    //return this.searchNode(this.rootNode, data);
    return this.searchNode(this.rootNode, data) !== null;
  }

  searchNode(node, data){
    if(!node) {
      return null;
    }

    if(node.data === data) {
      return node;
    }

    if(data < node.data) {
      return this.searchNode(node.left, data);
    } else {
      return this.searchNode(node.right, data);
    }
  }

  find(data) {
    return this.searchNode(this.rootNode, data);
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if(!node) {
      return null;
    }

    if(data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if(data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } 
    else {
      if(!node.left && !node.right) {
        return null;
      }

      if(!node.left) {
        node = node.right;
        return node;
      }

      if(!node.right) {
        node = node.left;
        return node;
      }

      let rightMin = this.minNode(node.right)
      node.data = rightMin.data;
      node.right = this.removeNode(node.right, rightMin.data);

      return node;
    }
  }

  min() {
    if(!this.rootNode) {
      return null;
    }
    return this.minNode(this.rootNode).data;
  }

  minNode(node) {
    while(node.left) {
      node = node.left;
    }
    return node
  }

  max() {
    if(!this.rootNode) {
      return null;
    }
    return this.maxNode(this.rootNode).data;
  }

  maxNode(node) {
    while(node.right) {
      node = node.right;
    }
    return node
  }

}

module.exports = {
  BinarySearchTree
};
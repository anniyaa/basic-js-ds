const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    let node = this.rootTree;
    return node ? node : null;
  }


  add(data) {
    this.rootTree = addNode(this.rootTree, data)


    function addNode(node, data) {

      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data)
      }

      return node;
    }
  }

  has(data) {

    return search(this.rootTree, data)

    function search(node, data) {

      if (node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }

    }
  }

  find(data) {
    return search(this.rootTree, data)

    function search(node, data) {

      if (node === null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }
    }
  }

  remove(data) {

  }

  min() {
    let nextNode = this.rootTree;
    while (nextNode.left) {
      nextNode = nextNode.left;
    }
    return nextNode.data;
  }

  max() {
    let nextNode = this.rootTree;
    while (nextNode.right) {
      nextNode = nextNode.right;
    }
    return nextNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
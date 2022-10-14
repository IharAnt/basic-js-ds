const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
  this.array = [];
 }

  push(element) {
    this.array.push(element)
  }

  pop() {
    if (this.array.length === 0) {
      return undefined;
    }
    return this.array.splice(-1)[0];
  }

  peek() {
    if (this.array.length === 0) {
      return undefined;
    }
    return this.array[this.array.length-1]
  }
}

// const stack = new Stack();
//     stack.push(5);
//     stack.push(6);
//     stack.push(7);
//     let dfd = stack.peek();//, 7);
//     dfd = stack.pop()//, 7);
//     dfd = stack.peek()//, 6);

module.exports = {
  Stack
};

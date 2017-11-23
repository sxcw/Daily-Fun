// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Source: https://leetcode.com
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minS = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.minS.length === 0 || this.getMin() >= x) {
        this.minS.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let t = this.stack.pop();
    if (this.getMin() >= t) {
        this.minS.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minS[this.minS.length - 1];
};

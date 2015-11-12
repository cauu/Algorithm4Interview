/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.nodes = [];
    this.curIndex = -1;
    
    _generateIter(root, this.nodes);

    function _generateIter(node, result) {
        if(!node) {
            return ;
        }
        _generateIter(node.left, result);
        result.push(node);
        _generateIter(node.right, result);
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return !!this.nodes[this.curIndex+1];
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    return this.nodes[++this.curIndex].val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

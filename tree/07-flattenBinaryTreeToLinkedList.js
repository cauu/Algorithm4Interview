/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return;

    flatten(root.left);
    flatten(root.right);
    var tempLeft,
        tempRight;
    if(!!root.left) {
        tempLeft = new TreeNode(root.left.val);
        tempLeft.left = root.left.left;
        tempLeft.right = root.left.right;
    }
    if(!!root.right) {
        tempRight = new TreeNode(root.right.val);
        tempRight.left = root.right.left;
        tempRight.right = root.right.right;
    }
    root.left = null;
    root.right = tempLeft;
    var node = root;
    while(!!node.right) {
        node = node.right;
    }
    node.right = tempRight;
};

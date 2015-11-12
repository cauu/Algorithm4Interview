/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if(!root) {
        return 0;
    }
    return _sum(root, 0);
    
    function _sum(node, sum) {
        if(!node) {
            return sum;
        }
        sum += node.val;
        if(!!node.left && !!node.right) {
            return _sum(node.left, sum*10) + _sum(node.right, sum*10);
        }
        else if(!node.left && !!node.right) {
            return _sum(node.right, sum*10);
        }
        else if(!node.right && !!node.left){
            return _sum(node.left, sum*10);
        }
        else {
            return sum;
        }
    }
};

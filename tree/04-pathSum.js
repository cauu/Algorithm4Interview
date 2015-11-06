/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) {
        return false;
    }
    if(sum - root.val == 0 && !root.left && !root.right) {
        return true;
    }
    else if(hasPathSum(root.left, sum-root.val)){
         return true;
    }
    else if(hasPathSum(root.right, sum-root.val)) {
        return true;
    }
    return false;
}

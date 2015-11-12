/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) {
        return true;
    }
    
    return _traverseSymmetric(root.left, root.right);
    
    function _traverseSymmetric(nl, nr) {
        if(!nl && !nr) {
            return true;
        }
        else if(!nl || !nr) {
            return false;
        }
        else if(nl.val === nr.val) {
            return _traverseSymmetric(nl.left, nr.right) && _traverseSymmetric(nl.right, nr.left); 
        }
        else {
            return false;
        }
    }
};

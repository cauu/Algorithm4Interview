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
var minDepth = function(root) {
    if(!root){
        return 0;
    }
    var leftDep = minDepth(root.left);
    var rightDep = minDepth(root.right);
    var min;
    if(leftDep==0&&rightDep!=0) {
        min = rightDep;
    }
    else if(rightDep==0&&leftDep!=0) {
        min = leftDep;
    }
    else {
        min = leftDep<=rightDep?leftDep:rightDep;
    }
    return 1 + min;
};

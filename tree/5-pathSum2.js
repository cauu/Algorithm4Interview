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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root) {
        return [];
    }
    var result = [];
    var curPath = [];
    
    pathSumHelper(root, sum, curPath, result);
    
    return result;
    
    function pathSumHelper(root, sum, curAns, ans) {
        if(!root) {
            return;   
        }
        var newCurPath = curAns.slice(0);
        newCurPath.push(root.val);
        
        if(sum - root.val == 0 && !root.left && !root.right) {
            ans.push(newCurPath);
        }
        else {
            pathSumHelper(root.left, sum-root.val, newCurPath, ans);
            pathSumHelper(root.right, sum-root.val, newCurPath, ans);
        }
    }

};

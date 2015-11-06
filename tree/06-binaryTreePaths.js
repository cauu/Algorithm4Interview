/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) {
        return [];
    }
    
    var allPaths = [];
    var curPath = "";
    btpathsHelper(root, curPath, allPaths);
    return allPaths;
    
    function btpathsHelper(root, curPath, result) {
        if(!root) {
            return;
        }
        var newPath = curPath;
        newPath = newPath + (newPath==''?"":"->") + root.val;
        if(!root.left && !root.right) {
            result.push(newPath);
        }
        else {
            btpathsHelper(root.left, newPath, result);
            btpathsHelper(root.right, newPath, result);
        }
    }
};

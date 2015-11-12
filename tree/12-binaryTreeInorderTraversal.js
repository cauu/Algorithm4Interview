/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) {
        return [];
    }
    
    var stack = [];
    var result = [];
    stack.push(root);
    while(stack.length > 0) {
            var tmp = stack.pop();
            if((!tmp.left&&!tmp.right) || !!tmp.visited) {
                result.push(tmp.val);
            }
            else {
                if(!!tmp.right) {
                    stack.push(tmp.right);
                }
                tmp.visited = true;
                stack.push(tmp)
                if(!!tmp.left) {
                    stack.push(tmp.left);
                }
            }
    }
    return result;
};

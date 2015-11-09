/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) {
        return [];
    }
    var queue = [];
    queue.push(root);
    var result = [];
    while(queue.length > 0) {
        var len = queue.length;
        var curLevel = [];
        curLevel[0] = [];
        
        while(len > 0) {
            //注意: splice方法返回的是一个数组
            var temp = queue.splice(0,1)[0];
            curLevel[0].push(temp.val);
            if(!!temp.left) {
                queue.push(temp.left);
            }
            if(!!temp.right) {
                queue.push(temp.right);
            }
            len--;
            }
        
        result = curLevel.concat(result);
    }
    return result;
};

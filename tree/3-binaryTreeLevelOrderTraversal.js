/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * The first implementation trigger time exceeded error
 * Because we need check if there are only sharps in 
 * the queue, while the length of the queue is exponential growth.
 * The 2nd implementation will save node of next level in a temp queue.
 * When current queue is empty, it will move to next level.
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    var queue = [];
    var level = 0;
    var number = [];
    var node;
    
    queue.push(root);
    
    while(!onlySharp(queue)) {
        var len = Math.pow(2,level);
        while(len > 0) {
            if(!!queue[0]){
                if(!number[level]) {
                    number[level] = [];
                }
                if(!!queue[0].val){
                    number[level].push(queue[0].val);
                }
                node = queue[0];
                if(!!node.left) {
                    queue.push(node.left)
                }
                else if(node=='#'||!node.left){
                    queue.push('#');
                }

                if(!!node.right) {
                    queue.push(node.right);
                }
                else if(node =='#'||!node.right){
                    queue.push('#');
                }
                queue.splice(0,1);
                len--;
           }
        }
        level++;
    }
    return number;
    
    function onlySharp(q) {
        var counter = 0;
        for(var i = 0;i<q.length;i++) {
            if(q[i]!='#'){
                counter++;
            }
        }
        return counter===0;
    }
};

var levelOrder_2 = function(root) {
    if(!root) {
        return [];
    }
    var queue = [];
    var level = 0;
    var number = [];
    var node;
    
    queue.push(root);
    
    while(queue.length>0) {
        var len = queue.length;
        var tmpQ = [];
        while(len > 0) {
            if(!!queue[0]){
                if(!number[level]) {
                    number[level] = [];
                }
                
                number[level].push(queue[0].val);
                
                node = queue[0];
                if(!!node.left) {
                    tmpQ.push(node.left)
                }
                if(!!node.right) {
                    tmpQ.push(node.right);
                }
                
                queue.splice(0,1);
                len--;
           }
        }
        queue = tmpQ;
        level++;
    }
    return number;

};

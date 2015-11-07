/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) {
        return true;
    }
    var str = [];
    var node = head;
    str.push(node.val);
    while(node.next) {
        node = node.next;
        str.push(node.val);
    }
    for(var i = 0, j = str.length-1;i<j;i++,j--) {
        if(str[i]!=str[j]) {
            return false;
        }
    }
    return true;
};

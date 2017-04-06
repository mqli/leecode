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
    if (root === null) {
        return true;
    }
    return isSame(root.left, root.right);
};
var isSame = function (nodeA, nodeB){
    if (nodeA === null && nodeB === null){
        return true;
    }
    if (nodeA === null || nodeB === null){
        return false;
    }
    if (nodeA.val !== nodeB.val) {
        return false;
    }
    return isSame(nodeA.left, nodeB.right) && isSame(nodeA.right, nodeB.left);
}

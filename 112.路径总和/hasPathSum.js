var hasPathSum = function(root, targetSum) {
	if (!root) return false
	if (!root.left && !root.right) return targetSum === root.val
	return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};
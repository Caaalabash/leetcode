// 老题新做
// 前序遍历 = 中左右 = [根节点, (左侧节点的前序遍历数组), (右侧节点的前序遍历数组)]
// 中序遍历 = 左中右 = [(左侧节点的中序遍历数组), 根节点, (右侧节点的中序遍历数组)]
// 那么容易联想到递归，每次从preorder中去除第一个节点作为根节点，然后在inorder中找到其索引，递归即可
function buildTree(preorder, inorder) {
  if (!preorder.length) {
    return null
  }
  const head = new TreeNode(preorder[0])
  // 找到这个index，相当于说：左侧节点的中序遍历数组有index个
  let index
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === head.val) {
      index = i
    }
  }
  head.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
  head.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))
  return head
}

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

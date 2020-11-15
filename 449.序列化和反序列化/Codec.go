package problem0449

import (
	"strconv"
	"strings"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type Codec struct {
}

func Constructor() Codec {
	return Codec{}
}

func (this *Codec) serialize(root *TreeNode) string {
	var (
		result []string
		dfs    func(node *TreeNode)
	)
	// 选择先序遍历
	dfs = func(node *TreeNode) {
		if node == nil {
			result = append(result, "#")
			return
		}
		result = append(result, strconv.Itoa(node.Val))
		dfs(node.Left)
		dfs(node.Right)
	}
	dfs(root)
	return strings.Join(result, ",")
}

// 105题目，从先序遍历构建二叉树
func (this *Codec) deserialize(data string) *TreeNode {
	var (
		result    = strings.Split(data, ",")
		buildTree func() *TreeNode
	)
	buildTree = func() *TreeNode {
		val := result[0]
		result = result[1:]
		if val == "#" {
			return nil
		}
		v, _ := strconv.Atoi(val)
		return &TreeNode{
			Val:   v,
			Left:  buildTree(),
			Right: buildTree(),
		}
	}
	return buildTree()
}

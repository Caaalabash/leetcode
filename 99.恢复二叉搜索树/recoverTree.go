package problem0099

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 二叉搜索树中的两个节点被错误交换，在不改变结构的情况下，恢复这颗树
// 这竟然是一道困难题？最容易想到的做法 => 中序遍历取得[]*TreeNode => 一次遍历找出两个节点 => 交换
// 12ms 6.1mb
func recoverTree(root *TreeNode) {
	var (
		a, b *TreeNode
		list []*TreeNode
		dfs  func(node *TreeNode)
	)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)
		list = append(list, node)
		dfs(node.Right)
	}
	dfs(root)

	for i := 0; i < len(list)-1; i++ {
		if list[i].Val > list[i+1].Val {
			a = list[i]
			break
		}
	}
	for i := len(list) - 1; i > 0; i-- {
		if list[i].Val < list[i-1].Val {
			b = list[i]
			break
		}
	}
	if a != nil && b != nil {
		a.Val, b.Val = b.Val, a.Val
	}
}

// 只用常数空间解决方案 = 不用[]*TreeNode = Morris遍历算法 = O(1)空间复杂度，O(N)时间复杂度
// 最佳Morris解释文章：https://oychao.github.io/2016/05/13/algorithm/01_morris/
// 本题只需要在Morris遍历算法输出的地方调用handler函数即可完成
// [1,2,3] => [1,3,2] 当遍历到2时，有 cur.Val < prev.Val，即：第一个错误节点必定为prev, 然后将第二个错误节点更新为cur
// [1,2,3,4] => [1,4,3,2] => 当遍历到3时，根据上面的例子第一个错误节点为4,第二个错误节点更新为3，继续向后执行，第二个错误节点更新为2
// 12ms 6mb
func recoverTree1(root *TreeNode) {
	var (
		a       *TreeNode
		b       *TreeNode
		prev    *TreeNode
		cur     = root
		handler = func() {
			if prev != nil && cur.Val < prev.Val {
				if a == nil {
					a = prev
				}
				b = cur
			}
			prev = cur
		}
	)
	for cur != nil {
		if cur.Left == nil {
			// 输出位置1
			handler()
			cur = cur.Right
		} else {
			// 寻找前驱
			leftRight := cur.Left
			for leftRight.Right != nil && leftRight.Right != cur {
				leftRight = leftRight.Right
			}

			if leftRight.Right == nil {
				leftRight.Right = cur
				cur = cur.Left
			} else {
				leftRight.Right = nil
				// 输出位置2
				handler()
				cur = cur.Right
			}
		}
	}
	if a != nil && b != nil {
		a.Val, b.Val = b.Val, a.Val
	}
}

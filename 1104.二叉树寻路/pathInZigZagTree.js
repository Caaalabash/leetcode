// 数学题
// 正序数值范围：[2^(i-1), 2^i - 1]
// 计算正序父节点label：parentLabel = childLabel >>= 1
// 顺序转换：2^i - 1 - label + 2^(i-1)
function pathInZigZagTree(label) {
    // 计算label处于第几行
    let row = 1
    let rowStart = 1
    while (label >= rowStart * 2) {
        row++
        rowStart <<= 1
    }
    if (row % 2 === 0) {
        label = getReverse(row, label)
    }
    const path = []

    while (row > 0) {
        if (row % 2 === 0) {
            path.push(getReverse(row, label))
        } else {
            path.push(label)
        }
        row--
        label >>= 1
    }

    path.reverse()
    return path
}

function getReverse(i, label) {
    return (1 << i) - 1 - label + (1 << (i - 1))
}
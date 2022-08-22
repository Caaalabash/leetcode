// 可取值范围为 [1, maxChoosableInteger] 不能重复使用值
// 稳赢：在我拿到第一个数之后，后面的所有数，你拿哪一个，我都有赢你的办法，不能理解成"闭着眼随便拿都能赢"

// 此类题目，通常需要抛弃先后手概念，变成"在当前局面下，当前做选择的玩家一定能赢吗"
// 转换成递归问题，输入：可选整数、累计和、目标和，输出：当前做选择玩家能否胜利
// 递归解法超时
function canIWin(maxChoosableInteger, desiredTotal) {
    // 公共整数池
    const candidates = new Set()
    for (let i = 1; i <= maxChoosableInteger; i++) {
        candidates.add(i)
    }
    // 递归
    return dfs(candidates, 0, desiredTotal)
}

function dfs(candidates, sum, desiredTotal) {
    for (const candidate of candidates) {
        if (sum + candidate >= desiredTotal) {
            return true
        }
        const nextCandidates = new Set([...candidates])
        nextCandidates.delete(candidate)
        if (!dfs(nextCandidates, sum + candidate, desiredTotal)) {
            return true
        }
    }
    return false
}

// 位运算优化：不具有一般性，仅限于 maxChoosableInteger 的取值范围为[1, 20]
// 由于使用位运算，优化candidates set空间，以及拷贝空间
// 核心是： 1 << i & state   1 << i | state
// 当然，依旧会超时，但是对通过的测试用例来说，还是好了一点
// 0010 表示数字2已经被选了 0001 表示数字1已经被选了
function canIWin(maxChoosableInteger, desiredTotal) {
    // state = 0, 表示所有数字都没有使用过
    return dfs(0, 0, maxChoosableInteger, desiredTotal)
}

function dfs(state, sum, maxChoosableInteger, desiredTotal) {
    // 遍历可选的公共整数
    for (let i = 1; i <= maxChoosableInteger; i++) {
        // 检查是否可用: 1 左移 i 位，进行按位与运算，结果不为0，则该位不可用
        if ((1 << i & state) !== 0) {
            continue
        }
        if (sum + i >= desiredTotal) {
            return true
        }
        if (!dfs(1 << i | state, sum + i, maxChoosableInteger, desiredTotal)) {
            return true
        }
    }
    return false
}

// 对dfs进行记忆化递归
function canIWin(maxChoosableInteger, desiredTotal) {
    if (maxChoosableInteger >= desiredTotal) {
        return true
    }
    if ((1 + maxChoosableInteger) * (maxChoosableInteger) / 2 < desiredTotal) {
        return false
    }

    const memo = new Map()

    const dfs = (usedNumbers, currentTotal) => {
        if (!memo.has(usedNumbers)) {
            let res = false
            for (let i = 1; i <= maxChoosableInteger; i++) {
                if (((usedNumbers >> i) & 1) === 0) {
                    if (i + currentTotal >= desiredTotal) {
                        res = true
                        break
                    }
                    if (!dfs(usedNumbers | (1 << i), currentTotal + i)) {
                        res = true
                        break
                    }
                }
            }
            memo.set(usedNumbers, res)
        }
        return memo.get(usedNumbers)
    }

    return dfs(0, 0)
}
// 从cards中抽cnt张牌，和为偶数计为得分，求最大有效得分
// 和为偶数 = 组合中，存在 k 个 奇数以及 cnt - k 个偶数，k 为偶数
// 那么偶数奇数分开求前缀和，再更新最大值
function maxmiumScore(cards, cnt) {
    // 降序排列
    cards.sort((a, b) => a < b ? 1 : -1)
    const odd = [0]
    const even = [0]
    for (const card of cards) {
        if (card % 2 === 0) {
            even.push(even[even.length - 1] + card)
        } else {
            odd.push(odd[odd.length - 1] + card)
        }
    }

    let result = 0
    for (let i = 0; i < odd.length; i += 2) {
        if (0 <= cnt - i && cnt - i < even.length) {
            result = Math.max(result, odd[i] + even[cnt - i])
        }
    }
    return result
}
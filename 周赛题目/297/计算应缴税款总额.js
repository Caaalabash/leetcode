// 按题意模拟
function calculateTax(brackets, income) {
    if (income <= brackets[0][0]) {
        return income * brackets[0][1] / 100
    }
    let ans = brackets[0][0] * brackets[0][1] / 100
    for (let i = 1; i < brackets.length; i++) {
        if (income > brackets[i - 1][0]) {
            ans += (Math.min(brackets[i][0], income) - brackets[i - 1][0]) * brackets[i][1] / 100
        } else {
            break
        }
    }
    return ans
}
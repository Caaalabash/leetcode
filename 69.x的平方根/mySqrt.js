// 小数部分将被舍去
function mySqrt(x) {
    let left = 0
    let right = x
    while (left < right) {
        const mid = (left + right + 1) >>> 1
        if (mid * mid > x) {
            right = mid - 1
        } else {
            left = mid
        }
    }
    return left
}
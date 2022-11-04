function reachNumber(target) {
    // 奇偶不重要
    target = Math.abs(target)
    let k = 0
    while (target > 0) {
        k++
        target -= k
    }
    return target % 2 === 0 ? k : k + 1 + k % 2
}
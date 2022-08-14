function maxScore(s) {
    // 统计1的总数
    let oneCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') oneCount++
    }
    let result = 0
    // 统计左侧分割点1的数量，并更新总分
    let leftOneCount = 0
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '1') leftOneCount++
        result = Math.max(result, i + 1 - leftOneCount + oneCount - leftOneCount)
    }
    return result
}
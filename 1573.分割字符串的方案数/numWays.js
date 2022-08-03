// 模拟 rating 1590
function numWays(s) {
    const length = s.length
    let totalOneCount = 0
    for (let i = 0; i < length; i++) {
        if (s.charAt(i) === '1') totalOneCount++
    }
    const eachSubStrOneCount = totalOneCount / 3
    if (eachSubStrOneCount % 1 !== 0) {
        return 0
    }
    if (eachSubStrOneCount === 0) {
        return ((length - 1) * (length - 2) / 2) % (1e9 + 7)
    }
    let lIndex = 0
    let mLeftIndex = 0
    let mRightIndex =0
    let rIndex = 0
    let oneCount = 0
    for (let i = 0; i < length; i++) {
        if (s.charAt(i) === '0') continue
        oneCount++
        if (oneCount === eachSubStrOneCount) {
            lIndex = i
        }
        if (oneCount === eachSubStrOneCount + 1) {
            mLeftIndex = i
        }
        if (oneCount === eachSubStrOneCount * 2) {
            mRightIndex = i
        }
        if (oneCount === eachSubStrOneCount * 2 + 1) {
            rIndex = i
        }
    }
    return (mLeftIndex - lIndex) * (rIndex - mRightIndex) % (1e9 + 7)
}
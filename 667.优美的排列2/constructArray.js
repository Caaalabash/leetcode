// 考虑两种边界情况 n = 5
// k = 1 时，显然 [1,2,3,4,5] 即可，相邻的差均为1
// k = n-1 时，显然 [1,n,2,n-1,3] 即可
// k = 2 时，显然 [1,2,3,5,4]
// 推广到一般：将两种情况合并处理，前半部分正常排序，保持均差为1，后半部分错位排序
// 观察可得前半部分的长度：n - k - 1
function constructArray(n, k) {
    const answer = new Array(n).fill(0)
    let idx = 0
    for (let i = 1; i < n - k; ++i) {
        answer[idx] = i
        ++idx
    }
    for (let i = n - k, j = n; i <= j; ++i, --j) {
        answer[idx] = i
        ++idx;
        if (i !== j) {
            answer[idx] = j
            ++idx
        }
    }
    return answer
}
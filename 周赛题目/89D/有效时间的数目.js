// 分情况讨论，这题实际比赛时WA了4次，思路是对于小时/分钟分别讨论，其中小时的情况要复杂一点
function countTime(time) {
    if (time.indexOf('?') === -1) return 1
    let result = 1
    // 小时的情况
    if (time[0] === '?' && time[1] === '?') {
        result = 24
    } else if (time[0] === '?') {
        if (time[1] > 3) {
            result = 2
        } else {
            result = 3
        }
    } else if (time[1] === '?') {
        if (time[0] === '2') {
            result = 4
        } else {
            result = 10
        }
    }
    // 分钟的情况
    if (time[3] === '?' && time[4] === '?') {
        result *= 60
    } else if (time[3] === '?') {
        result *= 6
    } else if (time[4] === '?') {
        result *= 10
    }
    return result
}
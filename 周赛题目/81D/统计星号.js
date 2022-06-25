// 按题意模拟，打卡了属于是
function countAsterisks(s) {
    if (s.length <= 2) {
        return 0
    }
    return s.split('|').filter((_, index) => index % 2 === 1).reduce((acc, str) => {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === '*') {
                acc++
            }
        }
        return acc
    }, 0)
}

// 更好做法，维护变量flag表示目前是否处于竖线对内部
function countAsterisks(s) {
    let result = 0
    let flag = false
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '|') {
            flag = !flag
        } else if (s.charAt(i) === '*' && !flag) {
            result++
        }
    }
    return result
}
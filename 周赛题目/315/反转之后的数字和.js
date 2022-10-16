var sumOfNumberAndReverse = function(num) {
    for (let i = num; i >= Math.floor(num / 2); i--) {
        const reverseNum = Number(String(i).split('').reverse().join(''))
        if (i + reverseNum === num) {
            return true
        }
    }
    return false
}
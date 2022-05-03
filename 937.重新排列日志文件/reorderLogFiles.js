// sort是稳定的
// logs[i][0]是唯一的
function reorderLogFiles(logs) {
    logs.sort((a, b) => {
        const aIsDigit = isDigitType(a)
        const bisDigit = isDigitType(b)
        if (aIsDigit && bisDigit) {
            return -1
        }
        if (!aIsDigit && bisDigit) {
            return -1
        }
        if (aIsDigit && !bisDigit) {
            return 1
        }
        const [signA, ...restA] = a.split(' ')
        const [signB, ...restB] = b.split(' ')
        if (restA.join() === restB.join()) {
            return signA > signB ? 1 : -1
        }
        return restA.join() > restB.join() ? 1 : -1
    })
    return logs
}

function isDigitType(log) {
    return / \d/.test(log)
}
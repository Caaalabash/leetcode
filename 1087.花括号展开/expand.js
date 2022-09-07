function expand(s) {
    const result = []
    const backTrack = (str) => {
        if (str.indexOf('{') === -1) {
            result.push(str)
            return
        }
        let firstL = -1
        let firstR = -1
        for (let i = 0; i < str.length; i++) {
            if (firstL !== -1 && firstR !== -1) break
            if (firstL === -1 && str[i] === '{') {
                firstL = i
            }
            if (firstR === -1 && str[i] === '}') {
                firstR = i
            }
        }
        const options = []
        for (let i = firstL + 1; i < firstR; i++) {
            if (str[i] !== ',') {
                options.push(str[i])
            }
        }
        options.sort((a, b) => a < b ? -1 : 1).forEach(c => {
            backTrack(str.substring(0, firstL) + c + str.substring(firstR + 1))
        })
    }
    backTrack(s)
    return result
}
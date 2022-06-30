function numsSameConsecDiff(n, k) {
    const result = []

    const backTrack = (combine) => {
        if (combine.length === n) {
            result.push(+combine)
            return
        }
        if (combine.startsWith('0')) {
            return
        }
        for (let i = 0; i <= 9; i++) {
            if (combine.length) {
                const last = combine.charAt(combine.length - 1)
                if (Math.abs(+last - i) !== k) {
                    continue
                }
            }
            combine += String(i)
            backTrack(combine)
            combine = combine.slice(0, combine.length - 1)
        }
    }
    backTrack('')

    return result
}
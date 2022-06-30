function permutation(s) {
    const arr = s.split('')
    arr.sort((a, b) => a < b ? -1 : 1)

    const result = []
    const N = arr.length
    const used = new Array(N).fill(false)

    const backTrack = (combine) => {
        if (combine.length === N) {
            result.push(combine)
            return
        }
        for (let i = 0; i < N; i++) {
            if (used[i] || i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) {
                continue
            }
            used[i] = true
            combine += arr[i]
            backTrack(combine)
            combine = combine.slice(0, combine.length - 1)
            used[i] = false
        }
    }
    backTrack('')

    return result
}
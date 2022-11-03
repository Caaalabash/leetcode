function maxRepeating (sequence, word) {
    let result = 0
    let subStr = word
    while (sequence.indexOf(subStr) > -1) {
        result++
        subStr += word
    }
    return result
}
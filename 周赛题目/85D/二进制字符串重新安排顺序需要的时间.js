function secondsToRemoveOccurrences(s) {
    let time = 0
    while (s.indexOf('01') > -1) {
        time++
        s = s.replaceAll('01', '10')
    }
    return time
}
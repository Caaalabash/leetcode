function temperatureTrend(temperatureA, temperatureB) {
    const n = temperatureA.length
    let i = 0
    let result = 0
    while (i < n - 1) {
        let prevI = i
        // 满足趋势相同
        while (
            (temperatureA[i + 1] > temperatureA[i] && temperatureB[i + 1] > temperatureB[i]) ||
            (temperatureA[i + 1] < temperatureA[i] && temperatureB[i + 1] < temperatureB[i]) ||
            (temperatureA[i + 1] === temperatureA[i] && temperatureB[i + 1] === temperatureB[i])) {
            i++
        }
        result = Math.max(result, i - prevI)
        i++
    }
    return result
}
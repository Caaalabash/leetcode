// 1 <= logs.length <= 100
// 1950 <= birth i < death i <= 2050

// 差分：这种考虑数量「变化量」的方法也被称为「差分」方法，而对应的数组叫做「差分数组」
function maximumPopulation(logs) {
  // 差分数组
  const record = new Array(101).fill(0)
  for (let i = 0; i < logs.length; i++) {
    record[logs[i][0] - 1950]++
    record[logs[i][1] - 1950]--
  }
  let maxValue = 0
  let maxValueIndex = 0
  let curValue = 0
  for (let i = 0; i < 101; i++) {
    curValue += record[i]
    if (curValue > maxValue) {
      maxValue = curValue
      maxValueIndex = i
    }
  }
  return maxValueIndex + 1950
}

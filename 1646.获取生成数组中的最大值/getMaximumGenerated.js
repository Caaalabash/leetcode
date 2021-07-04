function getMaximumGenerated(n) {
  if (n === 0) return 0
  const arr = new Array(n + 1)
  arr[0] = 0
  arr[1] = 1
  let max = 0
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i / 2]
    } else {
      arr[i] = arr[(i - 1) / 2] + arr[(i - 1) / 2 + 1]
    }
    max = Math.max(max, arr[i])
  }
  return max
}

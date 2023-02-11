// 贪心 + 分类讨论
// 为了使装水的时长最短，最好的办法当然是每次装两种，减少每次只装一杯的情况
// 假设不同类型杯子的数量为x,y,z，其中x<=y<=z
// 如果 x + y <= z，那么每次装满z的时候，同时可以装满x和y，时长为：z
// 如果 x + y > z，把 x,y 先消到上一种情况，时长为： (x + y - z + 1)/2 + z
function fillCups(amount) {
  amount.sort((a, b) => a < b ? -1 : 1)
  if (amount[0] + amount[1] <= amount[2]) {
    return amount[2]
  } else {
    return amount[2] + Math.floor((amount[0] + amount[1] - amount[2] + 1) / 2)
  }
}
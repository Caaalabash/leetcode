// 如果能完成，返回完成顺序，如果不能完成，返回空数组
// 和207大部分类似
function findOrder(numCourses, prerequisites) {
  // 构建入度数组和邻接表
  const inDegreeArr = new Array(numCourses).fill(0)
  const map = {}
  for (let i = 0; i < prerequisites.length; i++) {
    inDegreeArr[prerequisites[i][0]]++
    if (!(prerequisites[i][1] in map)) {
      map[prerequisites[i][1]] = []
    }
    map[prerequisites[i][1]].push(prerequisites[i][0])
  }
  // 入度为0的课程进入队列
  const queue = []
  for (let i = 0; i < inDegreeArr.length; i++) {
    if (inDegreeArr[i] === 0) {
      queue.push(i)
    }
  }
  let index = 0
  let count = 0
  while (index < queue.length) {
    const course = queue[index]
    index++
    count++
    // 根据邻接表，减小依赖它的数据的入度
    const dependCourse = map[course]
    if (dependCourse && dependCourse.length) {
      for (let i = 0; i < dependCourse.length; i++) {
        inDegreeArr[dependCourse[i]]--
        if (inDegreeArr[dependCourse[i]] === 0) {
          queue.push(dependCourse[i])
        }
      }
    }
  }
  return count === numCourses ? queue : []
}
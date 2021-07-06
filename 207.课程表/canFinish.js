// 这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1
// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi]
// 表示如果要学习课程 ai 则 必须 先学习课程 bi
function canFinish(numCourses, prerequisites) {
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
  let count = 0
  while (queue.length) {
    const course = queue.shift()
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
  return count === numCourses
}
// 模拟，2m
function sortPeople(names, heights) {
    const arr = names.map((name, index) => [name, heights[index]])
    arr.sort((a, b) => {
        if (a[1] === b[1]) return 0
        return a[1] < b[1] ? 1 : -1
    })
    return arr.map(i => i[0])
};
function floodFill(image, sr, sc, color) {
    const pickColor = image[sr][sc]
    if (pickColor === color) {
        return image
    }
    const m = image.length
    const n = image[0].length
    const dir = [-1, 0, 1, 0, -1]
    const queue = [[sr, sc]]
    image[sr][sc] = color
    while (queue.length) {
        const [x, y] = queue.shift()
        for (let k = 0; k < 4; k++) {
            const xx = x + dir[k]
            const yy = y + dir[k + 1]
            if (0 <= xx && xx < m && 0 <= yy && yy < n && image[xx][yy] === pickColor) {
                queue.push([xx, yy])
                image[xx][yy] = color
            }
        }
    }
    return image
}
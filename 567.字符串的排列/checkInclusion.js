// 字符串的排列
// 判断：第一个字符串的排列之一是第二个字符串的子串

// 滑动窗口，比较方式效率比较低
function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false
    }
    const sortS1 = s1.split('').sort().toString()

    let left = 0
    let right = s1.length-1
    for (;right < s2.length; right++) {
        const sortS2 = s2.slice(left, right+1).split('').sort().toString()
        if (sortS2 === sortS1) {
            return true
        }
        left++
    }
    return false
}


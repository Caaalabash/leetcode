// 需要注意二分查找的left，right初始值
// left应该取 Math.min(...time)，即开一趟的情况
// right应该取 left * totalTrips，即最快的车开 totalTrips 趟的情况
// 另外js中不管使用 (left + right) >> 1 还是 (left + right) >>> 1 都会有超时的情况
// 参考这里 https://262.ecma-international.org/#sec-numeric-types-number-leftShift
function minimumTime(time, totalTrips) {
    // 二分查找的上界和下界
    let left = Math.min(...time)
    let right = left * totalTrips
    while (left < right) {
        let middle = left + Math.floor((right - left) / 2);
        if (check(middle, time, totalTrips)) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return left;
};

// 二分查找的判定条件
function check(middle, time, totalTrips) {
    let trips = 0;
    for (let i = 0; i < time.length; i++) {
        trips += Math.floor(middle / time[i]);
    }
    return trips >= totalTrips;
}
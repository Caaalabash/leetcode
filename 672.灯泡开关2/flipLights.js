// 如果不进行任何优化进行搜索，按presses次按钮，每次4种选择，时间复杂度就已经来到了O(4^presses)
// 但是其实每个操作只有一次和零次的区别（同一个操作按两次等于没按，这点与操作顺序无关）
// 找规律
function flipLights(n, presses) {
    //不按开关
    if (presses === 0) {
        return 1;
    }
    //特殊情况处理
    if (n === 1) {
        return 2;
    } else if (n === 2) {
        //特殊情况
        return presses === 1 ? 3 : 4;
    } else {
        //n >= 3
        return presses === 1 ? 4 : presses === 2 ? 7 : 8;
    }
}
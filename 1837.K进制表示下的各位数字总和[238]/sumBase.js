// K 进制表示下的各位数字总和

// 补充进制转换的算法: 不断除以radix, 倒着写出余数
function toRadix(n, k) {
    let result = ''
    while (n) {
        result = `${n % k}${result}`
        n = Math.floor(n / k)
    }
    return Number(result)
}

// 事实上，我们并不需要显式求出进制转换后的结果，而是每次都加上余数就可以了
function sumBase(n, k) {
    let result = 0
    while (n) {
        result += n % k
        n = Math.floor(n / k)
    }
    return result
}
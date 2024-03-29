## 写在前面

实用性：0/5

有趣程度：5/5

仅为了通过 leetcode 周赛小学一下，理论上大概率是在做没有意义的事情。

## 数位DP

数位DP一直以来是DP家族里比较冷门的一种，但是一旦出现数位DP类型的题目，可能会直接给出一个O(n)都会超时的数据规模 => 不知道数位DP就寄了

### 解决什么问题：

**求出在给定区间[A, B]内，符合条件 f(i) 的数 i 的个数，条件 f(i) 一般与数字的大小无关，与数字的构成有关**

例如：

+ 数字[1, n]中，数字1出现了多少次
+ 数字[1, n]中，每一数位各不相同的数字出现了多少次
+ 数字[0, n]中，其二进制表示不含连续11的数字出现了多少次

可以看到这类问题非常好辨认

### 基本原理：

考虑人类计数的方式，最朴素的计数就是从小到大开始依次加一。但我们发现对于位数比较多的数，这样的过程中有许多重复的部分。

例如，从 7000 数到 7999、从 8000 数到 8999、和从 9000 数到 9999 的过程非常相似，**它们都是后三位从 000 变到 999**，不一样的地方只有千位这一位

所以我们可以把这些过程归并起来，将这些过程中产生的计数答案也都存在一个通用的数组里。此数组根据题目具体要求设置状态，用递推或 DP 的方式进行状态转移。

### 解决方式：记忆化搜索实现数位DP

本质上，记忆化搜索其实就是DP

dfs函数需要的参数：

+ 数位i

+ 记录答案的state：比如之前的数字取值、前一个字符的状态

+ 最高位限制limit：因为每位的取值是收到题目给到的n作为上限的

+ 前导0的标记lead：如果0会影响数字的结构，影响题目求解，则需要判断

其余参数根据题意按需传递了，核心的就是这四个

## JavaScript版代码实现

### [lc233.数字1的个数](https://leetcode.cn/problems/number-of-digit-one/submissions/)

> 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。

仅分析dfs参数：当前数位i，已选数位中1的数量，当前数位取值限制limit。

由于前导0的存在不影响题目求解，因此不需要lead参数

````javascript
// 数位dp
function countDigitOne(n) {
    const str = String(n)
    const len = str.length

    const dfs = memo((recur, i, oneCount, limit) => {
        if (i === len) {
            return oneCount
        }
        let res = 0
        const up = limit ? Number(str[i]) : 9
        for (let k = 0; k <= up; k++) {
            res += recur(i + 1, oneCount + Number(k === 1), limit && k === up)
        }
        return res
    })

    return dfs(0, 0, true)
}

// 单纯的记忆化函数，这是类似于python3.9 @cache装饰器一样的解法
function memo(fn) {
    const cache = new Map()
    return function recur(...args) {
        const key = args.toString()
        if (cache.has(key)) {
            return cache.get(key)
        }
        return cache.set(key, fn(recur, ...args)).get(key)
    }
}
````

### [lc600.不含连续1的非负整数](https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones/)

> 给定一个正整数 n ，请你统计在 [0, n] 范围的非负整数中，有多少个整数的二进制表示中不存在 连续的 1 。

仅分析dfs参数：当前数位i，前一位的取值，当前数位取值限制limit。

由于前导0的存在不影响题目求解，因此不需要lead参数

````javascript
function findIntegers(n) {
    const str = Number(n).toString(2)
    const len = str.length
    const dfs = memo((recur, i, status, isLimit) => {
        if (i === len) {
            return 1
        }
        let result = 0
        const end = isLimit ? Number(str[i]) : 1
        for (let k = 0; k <= end; k++) {
            if (status === 1 && k === 1) continue
            result += recur(i + 1, k, isLimit && k === end)
        }
        return result
    })
    return dfs(0, 0, true)
}
function memo(fn) {
    const cache = new Map()
    return function recur(...args) {
        const key = args.toString()
        if (cache.has(key)) {
            return cache.get(key)
        }
        return cache.set(key, fn(recur, ...args)).get(key)
    }
}
````

### [lc902.最大为N的数字组合](https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/)

> 给定一个按 非递减顺序 排列的数字数组 digits 。你可以用任意次数 digits[i] 来写的数字。例如，如果 digits = ['1','3','5']，我们可以写数字，如 '13', '551', 和 '1351315'。
>
> 返回 可以生成的小于或等于给定整数 n 的正整数的个数 。

仅分析dfs参数：当前数位i，当前数位取值限制limit，前导零hasFillNumber。

由于只能从digits中取数来用，那么需要使用前导零参数，避免遗漏0053这样的结构

````javascript
function atMostNGivenDigitSet(digits, n) {
    const str = String(n)
    const len = str.length
    const dfs = memo((recur, i, limit, hasFillNumber) => {
        if (i === len) {
            return Number(hasFillNumber)
        }
        let result = 0
        if (!hasFillNumber) {
            result = recur(i + 1, false, false)
        }
        const upLimit = limit ? str[i] : '9'
        for (const char of digits) {
            if (char > upLimit) break
            result += recur(i + 1, limit && upLimit === char, true)
        }
        return result
    })
    return dfs(0, true, false)
}

function memo(fn) {
    const cache = new Map()
    return function recur(...args) {
        const key = args.toString()
        if (cache.has(key)) {
            return cache.get(key)
        }
        return cache.set(key, fn(recur, ...args)).get(key)
    }
}
````


## 参考

[【洛谷日报#84】数字组成的奥妙——数位dp](https://zhuanlan.zhihu.com/p/50791875)

[OI Wiki - 数位DP](https://oi-wiki.org/dp/number/)
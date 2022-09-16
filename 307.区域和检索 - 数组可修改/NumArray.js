class NumArray {
    constructor(nums) {
        this.nums = nums
        this.n = nums.length
        this.tree = new Array(4 * this.n)
        this._build(0, this.n - 1, 1)
    }
    // 初始化
    _build(start, end, i) {
        if (start === end) {
            this.tree[i] = this.nums[start]
            return
        }
        const mid = start + Math.floor((end - start) / 2)
        this._build(start, mid, i * 2)
        this._build(mid + 1, end, i * 2 + 1)
        this._pushUp(i)
    }
    _pushUp(i) {
        this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1]
    }
    // 单点修改，分为：增量式修改（加上某值）、覆盖式修改（修改为某值）
    _update(updateI, val, start, end, i, isOverwrite) {
        if (start === end) {
            if (isOverwrite) {
                this.tree[i] = val
                this.nums[updateI] = val // 实时维护nums
            } else {
                this.tree[i] += val
                this.nums[updateI] += val
            }
            return
        }
        const mid = start + Math.floor((end - start) / 2)
        if (updateI <= mid) {
            this._update(updateI, val, start, mid, i * 2, isOverwrite)
        } else {
            this._update(updateI, val, mid + 1, end, i * 2 + 1, isOverwrite)
        }
        this._pushUp(i)
    }
    // 区间查询
    _sum(left, right, start, end, i) {
        if (left <= start && end <= right) {
            return this.tree[i]
        }
        const mid = start + Math.floor((end - start) / 2)
        let sum = 0
        if (left <= mid) {
            sum += this._sum(left, right, start, mid, i * 2)
        }
        if (right > mid) {
            sum += this._sum(left, right, mid + 1, end, i * 2 + 1)
        }
        return sum
    }
    // 区间极值
    _minOrMax(left, right, start, end, i, isMIn) {
        if (start === end) {
            return this.tree[i]
        }
        const mid = start + Math.floor((end - start) / 2)
        let lValue = isMIn ? Number.MAX_VALUE : Number.MIN_VALUE
        let rValue = isMIn ? Number.MAX_VALUE : Number.MIN_VALUE
        if (left <= mid) {
            lValue = this._minOrMax(left, right, start, mid, i * 2, isMIn)
        }
        if (right > mid) {
            rValue = this._minOrMax(left, right, mid + 1, end, i * 2 + 1, isMIn)
        }
        return Math[isMIn ? 'min' : 'max'](lValue, rValue)
    }
    add(updateI, val) {
        this._update(updateI, val, 0, this.n - 1, 1, false)
    }
    update(updateI, val) {
        this._update(updateI, val, 0, this.n - 1, 1, true)
    }
    sumRange(left, right) {
        return this._sum(left, right, 0, this.n - 1, 1)
    }
    min(left, right) {
        return this._minOrMax(left, right, 0, this.n - 1, 1, true)
    }
    max(left, right) {
        return this._minOrMax(left, right, 0, this.n - 1, 1, false)
    }
}
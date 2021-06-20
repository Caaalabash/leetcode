// 如何保证第一间房屋和最后一间房屋不同时偷窃呢？
// 如果偷窃了最后一件房屋，偷窃的下标范围应该是[1, nums.length - 1]
// 如果偷窃了第一件房屋，偷窃的下标范围应该是[0, nums.length - 2]
// 两者取最大值即可
// 1 <= nums.length <= 100
function rob(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    return Math.max(
        robRange(nums, 1, nums.length - 1),
        robRange(nums, 0, nums.length - 2)
    )
}

function robRange(nums, start, end) {
    nums = nums.slice(start, end + 1)
    if (nums.length === 1) {
        return nums[0]
    }
    let a = nums[0]
    let b = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        [a, b] = [b, Math.max(a + nums[i], b)]
    }
    return b
}
/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。
*/

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 排序 + 双指针
    // 使用双指针的情况：一个数增，另一个数随着减；反之亦可
    nums = nums.sort((a, b) => a - b)
    if (nums.length < 3) return []
    let leftIdx = 0, rightIdx = 0
    const result = []
    for (let i = 0; i < nums.length - 2; i++) {
        const element = nums[i];
        leftIdx = i + 1
        rightIdx = nums.length - 1
        if (i > 0 && element === nums[i - 1]) continue
        while(leftIdx < rightIdx) {
            if (nums[leftIdx] + nums[rightIdx] + element === 0) {
                result.push([element, nums[leftIdx], nums[rightIdx]])
                while(leftIdx < rightIdx && nums[leftIdx] === nums[leftIdx + 1]) {
                    // 过滤相同的
                    leftIdx++
                }
                while(leftIdx < rightIdx && nums[rightIdx] === nums[rightIdx - 1]) {
                    rightIdx--
                }
                leftIdx++
                rightIdx--
            }
            else if (nums[leftIdx] + nums[rightIdx] + element > 0) rightIdx--
            else leftIdx++
        }
        
    }
    return result
};

const nums = [0,0,0,0] //[-1,0,1,2,-1,-4] // // [], [0], [0,0,0,0]
// -4,-1,-1,0,1,2

console.log(threeSum(nums))
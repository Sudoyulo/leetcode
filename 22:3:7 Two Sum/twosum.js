const input = [3, 2, 4];
const target = 6;


const twoSum = (nums, target) => {

  for (let i = 0; i < nums.length; i++) {

    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j])

      if (nums[i] + nums[j] === target) {
        return [i, j]
      }

    }


  }

}

twoSum(input, target);
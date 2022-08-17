const checkNums = (arr) => {
  arr = arr.split(',');
  let nums = arr.map(x => Number(x))

  for (let num of nums) {
    if(isNaN(num)){
      return false;
    }
  }
  return nums;
}

const mean = (nums) => {
  const sum = nums.reduce((a, b) => a + b, 0); 
  const avg = sum / nums.length; 
  return avg; 
}

const median = (nums) => {
  let sortedNum = nums.sort(); 
  if(sortedNum.length % 2 !== 0){
    return sortedNum[Math.floor(sortedNum.length / 2)];
  } else {
    let num1 = sortedNum[Math.floor(sortedNum.length / 2)]
    let num2 = sortedNum[Math.floor(sortedNum.length / 2) - 1]
    
    return mean([num1, num2]); 
  }
}

const mode = (nums) => {
  let filterNums = countRepeats(nums); 
  let count = 0; 
  let mostRepeat; 

  for (let num in filterNums){
    if(filterNums[num] >= count){
      mostRepeat = num;
      count = filterNums[num]; 
    }
  }


  return +mostRepeat;
}

const countRepeats = (nums) => {
  let filterNums = {}; 
  for(let num of nums){
    if(num in filterNums){
      filterNums[num] += 1;
    } else {
      filterNums[num] = 1; 
    }
  }
  return filterNums; 
}

module.exports = {
  checkNums,
  mean, 
  median, 
  mode
}
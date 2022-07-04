function squareSum(numbers){
  let result = 0
  numbers.forEach(num => {
    num*=num
    result+=num
    console.log(result)
  })
  return result
}

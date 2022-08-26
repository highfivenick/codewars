function firstNonConsecutive (arr) {
  let result = null
  for (let i = 1; i < arr.length; i++){
    if (arr[i] !== arr[i - 1] + 1){
      result = arr[i]
      break
    }
  }
  return result

}

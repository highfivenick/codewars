function makeNegative(num) {
  // Code?
  let str = num.toString()
  if (str === '0' || (str.charAt(0) === '-')){
    return num
  }else {
    return num * -1
  }
}


function makeNegative(num) {
  // Code?
  let str = num.toString()
  if (str === '0' || (str.charAt(0) === '-')){
    return num
  }else {
    let neg = `-${str}`
    return Number(neg)
  }
}

//Parameters - num is a number
//Return - return the argument as a negative
//Example - 7 would return -7, 0 would return 0, -.1971 would return -.1971
//Pseudocode - check if the number is positive, negative, or 0; if positive, return its negative, if 0 or negative, return num

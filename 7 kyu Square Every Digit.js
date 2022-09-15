function squareDigits(num){
  let arr = num.toString().split('')
  return Number(arr.map(x => x*x).join(''))
  
}

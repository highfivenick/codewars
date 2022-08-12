function digitalRoot(n) {
  let numArr = n.toString().split('')
  let sum = 0
  do {
    sum = numArr.reduce(
      (previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0
    )
    numArr = sum
    if (sum > 9) {
      numArr = sum.toString().split('')
    }
  } while (sum > 9)
  return sum
}

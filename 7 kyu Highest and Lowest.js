function highAndLow(numbers){
  // ...
  let sorted = numbers.split(' ').sort((a,b) => a-b)
  console.log(sorted)
  return `${Number(sorted[sorted.length-1])} ${Number(sorted[0])}`
}

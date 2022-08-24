function duplicateCount(text){
  let sorted = text.toLowerCase().split('').sort()
  let count = 0
  console.log(sorted)
  for (let i = 0; i < sorted.length; i++){
    if ((sorted[i] === sorted[i + 1]) && (sorted[i] !== sorted[i - 1])){
      console.log(sorted[i], sorted[i + 1], sorted[i - 1])
      count++
    }
  }
  return count
}

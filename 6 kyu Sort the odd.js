function sortArray(array) {
    console.log(array)
  let odds = array.filter(num => num % 2 !==0).sort((a, b) => a - b )
  console.log(odds)
  for (let i = 0, j = 0; i < array.length; i++){
    if (array[i] % 2 !== 0){
      array.splice(i, 1, odds[j])
      j++
    }
    console.log(array)
  }
  return array
}

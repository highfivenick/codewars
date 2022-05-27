function find_average(array) {
  // your code here
  let avg = 0
  if (array.length === 0){
    return 0
  }
  else{
    for(let i = 0; i < array.length; i++){
    avg += array[i]
    }
  }
  return avg / array.length;
}

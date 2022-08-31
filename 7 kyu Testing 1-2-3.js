var number=function(arr){
  for (let i = 0; i < arr.length; i++){
    arr[i] = `${i+1}: ${arr[i]}`
  }
  return arr
}

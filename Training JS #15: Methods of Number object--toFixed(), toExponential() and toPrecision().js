function howManySmaller(arr,n){
  //coding here..
  let x = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i].toFixed(2) < n){
      x++
    }
  }
  return x
}

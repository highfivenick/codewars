function countPositivesSumNegatives(input) {
  // your code here
  if((input == null) || (input.length === 0)){
    return []
  }
  let pos = 0
  let neg = 0 
  for (let i = 0; i <= input.length; i++){
    if (input[i] > 0){
      pos++
    }else if (input[i] < 0){        
      neg += input[i]
    }
  }
  return [pos, neg]
}

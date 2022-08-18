function fakeBin(x){
  let fake = ''
  for (let i = 0; i < x.length; i ++){
    if (x[i] < 5){
      fake += '0'
    }else {
      fake += '1'
    } 
  }
  return fake
}

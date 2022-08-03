function XO(str) {
    //code here
  let ex = 0
  let oh = 0
  let lc = str.toLowerCase()
  for (let i = 0; i <= str.length; i++){
    console.log(lc.charAt(i))
    if (lc.charAt(i) == 'x'){
      ex++
    }else if (lc.charAt(i) == 'o'){
      oh++
    }
  }
  console.log(ex, oh)
  return ex == oh
}

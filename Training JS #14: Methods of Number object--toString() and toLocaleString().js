function colorOf(r,g,b){
  //coding here
  function colorString(x){
    let hex = x.toString(16)
    if (hex.length < 2) { 
      return '0' + hex 
    }else {
      return hex
    }
  }
  return `#${colorString(r)}${colorString(g)}${colorString(b)}`
}

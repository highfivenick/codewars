function duplicateEncode(word){
  let lc = word.toLowerCase()
  let str = ''
  for (let i=0; i < lc.length; i++) {
    if (lc.indexOf(lc[i]) !== lc.lastIndexOf(lc[i])) {
      str += ')'
    }else {
      str += '('
    }
  }
  return str
}

function longest(s1, s2) {
  // your code
  let arr = (s1 + s2).split('').sort()
  let result = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== arr[i+1]){
      result.push(arr[i])
    }
  }
  return result.join('')
}

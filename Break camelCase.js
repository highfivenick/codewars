function solution(string) {
  let arr = string.split('')
  let up = string.toUpperCase().split('')
  for (let i = string.length - 1; i >= 0; i--){
          console.log(arr)
    if (arr[i] === up[i]){
      arr.splice(i, 0, ' ')
    }
  }
  return arr.join('')
}

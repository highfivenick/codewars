function solution(value){
  let valStr = value.toString()
  let newVal = valStr.padStart(5, '0')
  return `Value is ${newVal}`
}

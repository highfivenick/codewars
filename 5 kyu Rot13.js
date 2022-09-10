function rot13(message){
  const alphabetLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const alphabetCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  let arr = message.split('')
  for (let i = 0; i < arr.length; i++){
    if (alphabetLow.includes(arr[i])){
      let letter = alphabetLow.findIndex((char) => char == arr[i])
      if (letter <= 12){
        arr.splice(i, 1, alphabetLow[letter + 13])
      }else if (letter > 12){
        arr.splice(i, 1, alphabetLow[12 - (25 - letter)])
      }
    }else if (alphabetCap.includes(arr[i])){
      let letter = alphabetCap.findIndex((char) => char == arr[i])
      if (letter <= 12){
        arr.splice(i, 1, alphabetCap[letter + 13])
      }else if (letter > 12){
        arr.splice(i, 1, alphabetCap[12 - (25 - letter)])
      }
    }
  }
  return arr.join('')
}

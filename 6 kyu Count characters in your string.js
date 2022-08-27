class StrCounter {
  constructor(string = ''){
    this.string = string
  }
  getString(){
    return this.string
  }
  setString(newString){
    this.string = newString 
  }
  count(){
    const countChar = {}
    let strArr = this.string.split('')
    console.log(strArr)
    for (let i = 0; i < strArr.length; i++){
      countChar.hasOwnProperty(strArr[i]) ? countChar[strArr[i]]++
        : countChar[strArr[i]] = 1
    }
    return countChar
  }
}

new StrCounter().getString()

const count = (string) => new StrCounter(string).count()

//Parameters - string which is a string
//Returns - an object filled w key-value pairs representing how many times each character appears in the string
//Example - aba, then the result should be {'a': 2, 'b': 1}
//Pseudocode - create an object and iterate through the string to count the characters

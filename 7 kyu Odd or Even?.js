function oddOrEven(array) {
  if (array.length === 0){
    array.push(0)
  }
  const sum = array.reduce((previousValue, currentValue) => previousValue + currentValue)
  return sum % 2 === 0 ? 'even' : 'odd'
}

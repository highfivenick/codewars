function rentalCarCost(d) {
  let subTotal = d * 40
  if (d >= 7){
    return subTotal -= 50
  }else if (d >= 3){
    return subTotal -= 20
  }else {
    return subTotal
  }
}

function grow(x){
  const product = x.reduce(
  (previousValue, currentValue) => previousValue * currentValue
  )
  return product
}

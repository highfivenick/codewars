function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints)
  const sum = classPoints.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  )
  return sum/classPoints.length < yourPoints ? true
    : false
}

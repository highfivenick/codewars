function bmi(weight, height) {
  let archaicMeasurement = (weight / (height*height))
  if (archaicMeasurement <= 18.5) {
    return 'Underweight'
  }else if ((18.5 < archaicMeasurement) && (archaicMeasurement <= 25)) {
    return 'Normal'
  }else if ((25 < archaicMeasurement) && (archaicMeasurement <= 30)) {
    return 'Overweight'
  }else if (archaicMeasurement > 30) {
    return 'Obese'
  }
}

function bmi(weight, height) {
  let archaicMeasurement = (weight / (height*height))
  return archaicMeasurement <= 18.5 ? 'Underweight'
    : archaicMeasurement <= 25 ? 'Normal'
    : archaicMeasurement <= 30 ? 'Overweight'
    : 'Obese'
}

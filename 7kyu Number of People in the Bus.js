var number = function(busStops){
  let arr = busStops.flat()
  let riders = 0
  for (let i = 0; i < arr.length; i++){
    i % 2 === 0 ? riders += arr[i] : riders -= arr[i]
  }
  return riders
}

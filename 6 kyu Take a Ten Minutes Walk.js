function isValidWalk(walk) {
  //insert brilliant code here
  let lat = 0 
  let long = 0
  
  walk.forEach(dir => {
    if(dir === 'n'){
      lat += 1
    }else if(dir === 's'){
      lat -= 1
    }else if(dir === 'e'){
      long -= 1
    }else if(dir === 'w'){
      long += 1
    }
  })
  let coordinates = `${lat}, ${long}`
  console.log(coordinates)
  if (coordinates === '0, 0' && walk.length === 10){
    return true
  }else {
    return false
  }
}

function even_or_odd(number) {
  let expr = number % 2
  switch(expr){
    case 0:
      return 'Even'
      break;
    case 1:
    case -1:
      return 'Odd'
      break;
  }
}

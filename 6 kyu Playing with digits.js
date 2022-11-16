function digPow(n, p){
  let expSum = 0
  const str = n.toString()
  console.log('str', str)
  for (let i = 0; i < str.length; i++, p++){
    console.log('num at i =', Number(str[i]), 'p =', p, 'num to p =', Number(str[i]) ** p)
    expSum += (Number(str[i]) ** p)
    console.log(expSum, expSum%n, expSum/n)
  }
  if (expSum % n === 0){
    return expSum/n
  }else {
    return -1
  }
}

// P - n is a positive integer that we must use to receive a sum gotten by giving each digit an exponent determined by the second parameter, p (also a positive integer), incremented with each successive digit of n
// R - we want to return a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n. if no such number exists, we will return -1
// E - digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 ; digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// P - iterate through each digit of n, assign each an exponent determined by incrementing p, then find the sum. if the sum divided by n is a whole number, return that number. otherwise, return -1.

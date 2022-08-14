function getMiddle(s)
{
  //Code goes here!
  let half = s.length/2
  return Number.isInteger(half) ? `${s.charAt(half-1)}${s.charAt(half)}` : `${s.charAt(Math.floor(half))}`
}

function countDays(d){
  const start = Date.now()
  let days = Math.round(Math.abs((start - d.getTime())/86400000))
  return days === 0 ? 'Today is the day!'
    : start > d.getTime() ? 'The day is in the past!'
    : `${days} days`
}

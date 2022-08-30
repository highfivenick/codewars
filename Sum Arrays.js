function sum (nums) {
  const initialValue = 0
  const total = nums.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  )
  return total
};

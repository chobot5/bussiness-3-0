const num = 3.8

// String, Boolean, Number, Object, Array, Function, Date, RegExp, Error, Math, JSON

export const mathObj = () => {
  const roundNum = Math.round(num)
  const floorNum = Math.floor(num)
  const ceilNum = Math.ceil(num)
  const absNum = Math.abs(-num)
  const minFrom = Math.min(1, 2, 3, 4, 5) // Math.min(...[1, 2, 3, 4, 5])
  const maxFrom = Math.max(1, 2, 3, 4, 5) // Math.max(...[1, 2, 3, 4, 5])

  return { num, roundNum, floorNum, ceilNum, absNum, minFrom, maxFrom }
}

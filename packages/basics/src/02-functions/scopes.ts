const MULTIPLIER = 2
const sumOuter = (a: number, b: number) => a + b

function outerFn(a: number, b: number) {
  return (a + b) * MULTIPLIER
}

function outerFn2(a: number, b: number) {
  const sum = a + b
  return sum * MULTIPLIER
}

const outerFn3 = (a: number, b: number) => {
  const sum = sumOuter(a, b)
  return sum * MULTIPLIER //  sumOuter(a, b) * MULTIPLIER
}

const outerFn4 = (a: number, b: number) => {
  const sumInner = (a: number, b: number) => a + b
  return sumInner(a, b) * MULTIPLIER
}

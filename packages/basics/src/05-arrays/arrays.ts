interface BusinessLevel {
  name: string
  value: number
}

export const businessLevels: BusinessLevel[] = [
  { name: 'business 1.0', value: 1 },
  { name: 'business 2.0', value: 2 },
  { name: 'business 3.0', value: 3 },
]

export const doubleBusinessValue = businessLevels.map((level) => {
  return { ...level, value: level.value * 2 }
})

/*
alternative 1
export const doubleBusinessValue = businessLevels.map(function(level) {
  return { ...level, value: level.value * 2 }
})

alternative 2
const mapDoubleBusinessValue = (level: BusinessLevel) => ({ ...level, value: level.value * 2 })
export const doubleBusinessValue = businessLevels.map(mapDoubleBusinessValue)
 */

export const filterNonDeveloperLevels = businessLevels.filter((level) => level.value < 3)

export const findDeveloperLevel = businessLevels.find((level) => level.value === 3)

export const hasOnlyDeveloperLevels = businessLevels.every((level) => level.value === 3)

export const hasNotDeveloperLevels = businessLevels.some((level) => level.value !== 3)

export const findLevelValue3Index = businessLevels.findIndex((level) => level.value === 3)
export const logEachLevel = businessLevels.forEach((level, index) => {
  // console.log(`${index} - Level: ${level.name}`)
})

export const sortByLevelDesc = businessLevels.sort((a, b) => b.value - a.value)

export const sumLevelValues = businessLevels.reduce((acc, curr) => {
  return acc + curr.value
}, 0)

const firstIndex = 0
export const firstBusinessLevel = businessLevels[firstIndex]
// export const firstBusinessLevel = businessLevels.at(firstIndex)
// "abc"[1] // "b"

// classic loops
// ............

// for
const doForLoop = (iterationsCount: number) => {
  for (let step = 0; step < iterationsCount; step++) {
    console.log(`For: iteration ${step}`)
  }
}
// doForLoop(5)

// do - while
const doWhileDoLoop = (iterationsCount: number) => {
  let i = 0
  do {
    console.log(`DoWhile: iteration ${i}`)
    i++
  } while (i < iterationsCount)
}

// doWhileDoLoop(5)

// while
const doWhileLoop = (iterationsCount: number) => {
  let i = 0
  while (i < iterationsCount) {
    console.log(`While: iteration ${i}`)
    i++
  }
}
// doWhileLoop(5)

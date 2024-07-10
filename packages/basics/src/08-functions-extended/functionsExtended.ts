export const makeFullName = (firstName: string) => {
  function addSurname(surname: string) {
    return firstName + ' ' + surname // `${name} ${surname}`
  }
  //const addSurname2 = (surname: string) => name + ' ' + surname

  return addSurname
}

const createFullName = makeFullName('Honza')
const fullName = createFullName('Doe')
const fullName2 = createFullName('Nekdo')

const fullName3 = makeFullName('Honza')('Doe2')

export const calcPercentage = (baseNumber: number) => {
  const calcPercent = (percent: number) => {
    return (baseNumber / 100) * percent
  }

  // equivalent to
  // return (percent: number) => (baseNumber / 100) * percent

  return calcPercent
}

const calcPercentFrom666 = calcPercentage(666)
const final10PercentageResult = calcPercentFrom666(10)
const final10PercentageResult2 = calcPercentage(666)(20)

const sum3fn = (a: number) => (b: number) => (c: number) => a + b + c
const sum3Result = sum3fn(1)(2)(3)

const giveMeACall = (a: number, b: number, onSum: (result: number) => any) => {
  const sum = a + b
  onSum(sum)
  return sum
}

giveMeACall(1, 2, (result) => {
  console.log(result)
})

const logAndAdd5 = (lastResult: number) => {
  console.log(lastResult)
  return lastResult + 5
}

giveMeACall(1, 2, logAndAdd5) // logAndAdd5 -> 1 + 2 + 5

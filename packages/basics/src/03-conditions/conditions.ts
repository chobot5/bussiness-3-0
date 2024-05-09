import { Person } from '../02-functions/functions'

export function getOnlyPositiveNumber(myNumber: number) {
  if (myNumber > 0) {
    return myNumber
  } else {
    return null
  }
}

export function getOnlyPositiveNumber2(myNumber: number) {
  if (myNumber > 0) {
    return myNumber
  }

  return null
}

export const getOnlyPositiveNumber3 = (myNumber: number) => (myNumber > 0 ? myNumber : null)

export const getTaskSource = (task: { epic?: string | null; isInternal: boolean; isDps: boolean }) => {
  if (task.epic && task.isDps) {
    return 'dps'
  } else if (task.epic && !task.isDps) {
    return task.epic
  } else if (task.isInternal) {
    return 'internal folder'
  } else {
    throw new Error('Task source not found')
  }
}

type BusinessLevel = 0 | 1 | 2 | 3

export const getBusinessLevel = (personSkill: 'useGem' | 'useUnrestricted' | 'useReact'): BusinessLevel => {
  switch (personSkill) {
    case 'useGem':
      return 1
    case 'useUnrestricted':
      return 2
    case 'useReact':
      return 3
    default:
      return 0
  }
}

export const isPersonOld = (person: Person) => person.age >= 36

export const isEqual = (a: number, b: number) => a === b
export const isNotEqual = (a: number, b: number) => a !== b
export const sayHelloWhenTrue = (condition: boolean) => (condition ? 'Hello' : 'Goodbye')

export const isBlackOrBlue = (color: 'black' | 'blue' | 'green' | 'red') => color === 'black' || color === 'blue'

// not work with numbers
export const getOnlyDefined = (value: string | undefined) => value && value
export const getOnlyDefinedWithDefault = (notDefinedMessage: string, value?: string) => value ?? notDefinedMessage

export const jsFail1 = (value: number) => (value ? 'number exists' : 'number does not exist')
export const jsFail2 = (value: string) => (value ? 'string exists' : 'string does not exist')

const MULTIPLIER = 2
export const conditionFnWithScopes = (a: number, b: number) => {
  function getOnlyNegativeNumber(value: number) {
    if (value < 0) {
      return value
    }
    return null
  }

  if (getOnlyPositiveNumber(a)) {
    return a * MULTIPLIER
  }

  if (getOnlyNegativeNumber(b)) {
    return b * MULTIPLIER
  }

  return 0
}

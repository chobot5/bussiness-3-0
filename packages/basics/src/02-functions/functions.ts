export function sum(a: number, b: number) {
  return a + b
}

export const inlineSum = (a: number, b: number) => a + b
export const logMessage = (message: string) => console.log(message)

type AnimalType = 'dog' | 'cat' | 'bird' | 'fish'

interface Animal {
  type: AnimalType
  name: string
  makeSound: () => string
}

export const makeAnimalSound = (animal: Animal) => {
  return animal.makeSound()
}

export interface Person {
  age: number
  firstName: string
  lastName: string
  skills: string[]
  animals?: Animal[]
}

export const createPerson = (
  firstName: string,
  lastName: string,
  age: number,
  skills: string[],
  animals: Animal[],
): Person => {
  return {
    age: age,
    firstName,
    lastName,
    skills,
    animals,
  }
}

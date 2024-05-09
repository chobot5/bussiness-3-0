import { createPerson, makeAnimalSound, sum } from './functions'

const functions = {
  sum: sum(1, 2),
  dogSound: makeAnimalSound({ type: 'dog', name: 'hafik', makeSound: () => 'woof' }),
  person: createPerson(
    'John',
    'Doe',
    40,
    ['react', 'gem', 'css', 'html', 'typescript'],
    [{ type: 'dog', name: 'hafik', makeSound: () => 'woof' }],
  ),
}

export default functions

const somePromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    console.log(666)
    resolve('business 3.0')
  }, 300)
})

const x = 666
const somePromiseXX = new Promise<number>((resolve, reject) => {
  if (x === 666) {
    resolve(x)
  } else {
    reject('not 666')
  }
})

const fnWithPromises = () => {
  const xPromise = somePromise
    .then((result) => {
      console.log(result)
      return result + '!'
    })
    .catch((error) => {
      console.log(error)
    })

  console.log('test')

  return xPromise
}

const asyncFn = async () => {
  const result = await somePromiseXX
  return result
}

const asyncFn2 = async () => {
  try {
    const result = await somePromiseXX
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}

const outerAsync = async () => {
  return await asyncFn2()
}

const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promiseA')
  }, 300)
})

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promiseB')
  }, 300)
})

const result = Promise.all([promiseA, promiseB])
//vs
const getResult = async () => {
  const resultA = await promiseA
  const resultB = await promiseB
  return [resultA, resultB]
}

type A = 'x' | 'y' | 'z'

enum AEnum {
  X,
  Y,
  Z,
}

function fn(a: A) {
  console.log(a)
}

function fnEnum(a: AEnum) {
  console.log(a)
}

//console.log(fnEnum(AEnum.X))
//console.log(fnEnum(0))

type Input = {
  name: string
}

type InputWithId = Input & {
  id: string
}

type InputWithPlaceholder = InputWithId & {
  placeholder: string
}

interface AA {
  a: string
}

interface BB extends AA {
  b: string
}

interface CC extends BB {
  c: string
}

interface DD extends AA, BB {}

type Abc = Omit<InputWithPlaceholder, 'name'>

interface SelectBoxItem<Value> {
  label: string
  value: Value
  order: number
}

interface SelectBoxProps<Value extends string | number> {
  label: string
  value: Value
  options: SelectBoxItem<Value>[]
}

interface Animal {
  type: string
  name: string
}

interface Cat extends Animal {
  eat: boolean
}

interface Dog extends Animal {
  poop: boolean
}

function SelectBox<Value extends string | number>({ label, value, options }: SelectBoxProps<Value>) {
  return {
    label,
    value,
    options: options.sort((a, b) => a.order - b.order),
  }
}

const dog: Dog = { type: 'dog', name: 'Rex', poop: true }

const xxxx = SelectBox({
  label: 'a',
  value: 'asd',
  options: [
    { label: 'a', value: 'Asd', order: 1 },
    { label: 'b', value: 'da', order: 2 },
  ],
})

type AnimalValue = Record<string, Dog | Cat>

const animalsMap: AnimalValue = {
  jmeno: dog,
  jmenov2: { name: 'doggie', type: 'dog', poop: false },
  kocka: { name: 'kitty', type: 'cat', eat: true },
}

interface BirthInfo {
  location: string
  date: Date
}

type CatSkill = 'jump' | 'run' | 'hunt' | 'sleep'

type A = Extract<CatSkill, 'sleep' | 'hunt'>
type B = Extract<CatSkill, 'sleep' | 'hunt'>

type C = [string, string, string] | number[]

const test: C = [666]

interface CatExtension {
  color: string
}

type CatRecord = Record<CatSkill, BirthInfo>

const getCatByIdOrName = (id?: number, name?: string): Cat[] | null => {
  return null
}

interface Cat {
  age: number
  name: string
  birthInfo: BirthInfo
  skills: CatSkill[]
}

type Dog = {
  readonly name: string | null | undefined
  age?: number
}

const littleDog: Required<Dog> = {
  name: 'Little Dog',
  age: 1,
}

export const robin: Cat = {
  age: 22,
  name: 'Robin',
  birthInfo: {
    location: 'Poděbrady',
    date: new Date('2023-09-01'),
  },
  skills: ['jump', 'run'],
}

type CatKey = keyof Cat
type CatNestedKey = keyof Cat['birthInfo']

const birthKeys: CatNestedKey = 'location'

type OmitCatNameAndAge = Omit<Cat, 'name' | 'age'>
type OnlyCatNameAndAge = Omit<Cat, 'name' | 'age'>

export const objectKeys = Object.keys(robin)
export const objectNestedKeys = Object.keys(robin.birthInfo)
export const objectValues = Object.values(robin)
export const objectNestedValues = Object.values(robin.birthInfo)
export const objectEntries = Object.entries(robin)
export const objectNestedEntries = Object.entries(robin.birthInfo)

// mutable vs immutable
// mutable pouze upravuje puvodni objekt
// immutable vytvori novy objekt s upravenymi hodnotami
const changeAgeMutable = (cat: Cat, newAge: number) => {
  cat.age = newAge
}

/*
changeAgeMutable(robin, 23)
console.log(robin)
*/

const changeAgeImmutable = (cat: Cat, newAge: number): Cat => {
  return { ...cat, age: newAge }
}

const changeBirthLocationImmutable = (cat: Cat, newLocation: string): Cat => {
  return { ...cat, birthInfo: { ...cat.birthInfo, location: newLocation } }
}

const addCatSkill = (cat: Cat, newSkill: CatSkill): Cat => {
  return cat.skills.includes(newSkill) ? cat : { ...cat, skills: [...cat.skills, newSkill] }
}

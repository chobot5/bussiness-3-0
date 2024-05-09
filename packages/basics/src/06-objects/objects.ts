interface BirthInfo {
  location: string
  date: Date
}

type CatSkill = 'jump' | 'run' | 'hunt' | 'sleep'

interface Cat {
  age: number
  name: string
  birthInfo: BirthInfo
  skills: CatSkill[]
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

export const objectKeys = Object.keys(robin)
export const objectNestedKeys = Object.keys(robin.birthInfo)
export const objectValues = Object.values(robin)
export const objectNestedValues = Object.values(robin.birthInfo)
export const objectEntries = Object.entries(robin)
export const objectNestedEntries = Object.entries(robin.birthInfo)

const changeAgeMutable = (cat: Cat, newAge: number) => {
  cat.age = newAge
}

/*
changeAgeMutable(robin, 23)
console.log(robin)
*/

const changeAgeImmutable = (cat: Cat, newAge: number) => {
  return { ...cat, age: newAge }
}

const changeBirthLocationImmutable = (cat: Cat, newLocation: string): Cat => {
  return { ...cat, birthInfo: { ...cat.birthInfo, location: newLocation } }
}

const addCatSkill = (cat: Cat, newSkill: CatSkill): Cat => {
  return cat.skills.includes(newSkill) ? cat : { ...cat, skills: [...cat.skills, newSkill] }
}

const numberA = 99
const numberB = 100

export const sum = numberA + numberB
export const div = numberA / numberB
export const diff = numberA - numberB
export const mult = numberA * numberB
export const mod = numberA % numberB

const stringA = 'Hello'
const stringB = 'World'

export const concatString = stringA + ' ' + stringB
// export const concatString = `${stringA} ${stringB}`
// export const concatString = stringA.concat(' ', stringB)

export let redaclared = 'I am a variable'
redaclared = 'I am a variable with a new value'

const iAmDeveloper = true
//const nullValue = null
//const undefinedValue = undefined

// const numberList = [1, 2, 3, 4, 5]
// const booleanList = [true, false, true, false]

const productOwnerSkill = 'product owner'
const skillList = ['react', 'gem', 'css', 'html', 'typescript', productOwnerSkill]

const objectWithNesting = { a: 66, b: 77, c: { d: 'nestedD', e: [{ deeplyNested: 'deeplyNestedValue' }] } }

const isDeveloper = iAmDeveloper && skillList.includes('react')
const isGemMaster = skillList.includes('gem')

export const business30 = {
  isDeveloper,
  isGemMaster,
  isGemOrDev: isGemMaster || isDeveloper,
  name: 'Business 30',
  skills: skillList,
  oneStringSkills: skillList.join(', '),
  someObject: objectWithNesting,
}

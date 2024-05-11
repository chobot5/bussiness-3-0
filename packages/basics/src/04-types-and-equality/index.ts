import * as myFunctions from './typesAndEquality'

const person1 = { name: 'John', age: 30, city: 'New York' }

//object mutation
const person1Copy = { ...person1 }
person1Copy.age = 19
person1Copy.name = 'Robin'

const person2 = { name: 'John', age: 30, city: 'New York' }
const skills1 = ['react', 'gem', 'css', 'html', 'typescript']
const skills2 = ['react', 'gem', 'css', 'html', 'typescript']

const person3 = { ...person1 }
const person4 = { ...person1, name: 'Robin', age: 2 }
const skill3 = [...skills1, 'kotlin']

/*
array mutation
--------------------------------
skill3.push('kotlin')
skills[5] = "java"
skills.at(5) = "java"
 */

const num1 = 666
const num2 = 666

const typesAndEquality = {
  types: {
    isString: myFunctions.isString('aaa'),
    isNumber: myFunctions.isNumber(1),
    isBoolean: myFunctions.isBoolean(true),
    isUndefined: myFunctions.isUndefined(undefined),
    isFunction: myFunctions.isFunction(() => 666),
    isObject: myFunctions.isObject({}),
    isArray: myFunctions.isObject([]),
    isNull: myFunctions.isObject(null),
    isDate: myFunctions.isObject(new Date()),
    isNotANumber: myFunctions.isNotANumber(NaN),
    isList: myFunctions.isArray(['a', 'b']),
    isDateInstance: myFunctions.isDate(new Date()),
  },
  equality: {
    stringEq: 'a' === 'a',
    numberEq: 1 === 1,
    booleanEq: true === true,
    objectEquality: person1 === person1,
    objectEquality2: person1 === person2,
    isNumberEqual: num1 === num2,
    objectEquality3: person1 === person3,
    arrayEquality: skills1 === skills1,
    arrayEquality2: skills1 === skills2,
    spread: person3,
    spread2: person4,
    spread3: skill3,
  },
  casting: myFunctions.casting,
}

export default typesAndEquality

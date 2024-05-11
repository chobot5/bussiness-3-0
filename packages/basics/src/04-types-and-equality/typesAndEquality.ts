export const isString = (value: unknown) => typeof value === 'string'

export const isNumber = (value: unknown) => typeof value === 'number'

export const isBoolean = (value: unknown) => typeof value === 'boolean'

export const isUndefined = (value: unknown) => typeof value === 'undefined'

export const isFunction = (value: unknown) => typeof value === 'function'

export const isObject = (value: unknown) => typeof value === 'object'

export const isNotANumber = (value: unknown) => isNaN(value as number)

export const isArray = (value: unknown) => Array.isArray(value)

export const isDate = (value: unknown) => value instanceof Date

const int = '11'
const float = '3.14'
const obj = { a: 66 }
const strObj = '{ "a": 66 }'

export const casting = {
  stringToNumber: {
    '1': +int,
    '2': parseInt(int),
    '3': Number(int),
    '4': +'xxx', // NaN,
  },
  stringToFloat: {
    '1': +float,
    '2': parseFloat(float),
    '3': Number(float),
    '4': +'3,14',
    '5': parseFloat('3,14'),
  },
  numberToString: {
    '1': +int.toString(),
    '2': +float.toString(),
    '3': int + '',
  },
  objectToString: {
    '1': JSON.stringify(obj),
  },
  stringToObject: JSON.parse(strObj),
  stringToBoolean: {
    '1': Boolean('nejakej string'),
    '2': Boolean(''),
  },
  numberToBoolean: {
    '1': Boolean(0),
    '2': Boolean(1),
  },
  objectToBoolean: {
    '1': Boolean({}),
    '2': Boolean(null),
  },
}

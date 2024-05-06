export const isString = (value: unknown) => typeof value === 'string'

export const isNumber = (value: unknown) => typeof value === 'number'

export const isBoolean = (value: unknown) => typeof value === 'boolean'

export const isUndefined = (value: unknown) => typeof value === 'undefined'

export const isFunction = (value: unknown) => typeof value === 'function'

export const isObject = (value: unknown) => typeof value === 'object'

export const isNotANumber = (value: unknown) => isNaN(value as number)

export const isArray = (value: unknown) => Array.isArray(value)

export const isDate = (value: unknown) => value instanceof Date

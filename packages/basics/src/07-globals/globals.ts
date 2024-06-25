// String, Boolean, Number, Object, Array, Function, Date, RegExp, Error, Math, JSON, process, Promise, UrlSearchParams, Url, XMLHttpRequest, Map, Set
// browser - window, document
// global functions - setTimeout, setInterval, clearTimeout, clearInterval, fetch,encodeURIComponent, decodeURIComponent,...

// window - sessionStorage, localStorage, ...

const num = 3.8
export const mathObj = () => {
  const roundNum = Math.round(num)
  const floorNum = Math.floor(num)
  const ceilNum = Math.ceil(num)
  const absNum = Math.abs(-num)
  const minFrom = Math.min(1, 2, 3, 4, 5) // Math.min(...[1, 2, 3, 4, 5])
  const maxFrom = Math.max(1, 2, 3, 4, 5) // Math.max(...[1, 2, 3, 4, 5])

  return { num, roundNum, floorNum, ceilNum, absNum, minFrom, maxFrom }
}

// ignore duplicate values
/*
const helloSet = new Set(['hello', 'world'])
helloSet.size // 2
helloSet.add('hello') // helloSet.size = 2

const logAfter = (seconds: number, message: string) => {
  setTimeout(() => {
    console.log(message)
  }, seconds * 1000)
}


const retryLog = (seconds: number, message: string) => {
  setInterval(() => {
    console.log(message)
  }, seconds * 1000)
}
*/

export const globalNumberFunctions = () => {
  const parsedNum = parseInt('42')
  const pi = Number('3.14')
  const notPi = Number('abc')
  // console.log(notPi) . // NaN

  const parsePi = parseFloat('3.14')
  // const p = Number.parseInt('42')

  return { parsedNum, pi, notPi, parsePi }
}

export const globalStringFunctions = () => {
  const str = String(42)
  const str2 = String(3.14)
  const str3 = String(true)

  const str4 = 'abc'.replace('bc', 'd')
  const str5 = 'abcbxby'.replace(/b/g, 'd')

  return { str, str2, str3, str4, str5 }
}

export const globalBooleanFunctions = () => {
  const bool = Boolean(42)
  const bool2 = Boolean(0)
  const bool3 = Boolean('abc')
  const bool4 = Boolean('')
  const bool5 = Boolean(null)
  const bool6 = Boolean(undefined)
  return { bool, bool2, bool3, bool4, bool5, bool6 }
}

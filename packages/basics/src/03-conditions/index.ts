import {
  getOnlyPositiveNumber,
  getOnlyPositiveNumber2,
  getTaskSource,
  isPersonOld,
  jsFail1,
  jsFail2,
  printOnlyDefined,
  printOnlyDefinedWithDefault,
  getBusinessLevel,
} from './conditions'

const conditions = {
  isPersonOld: isPersonOld({ firstName: 'John', lastName: 'Doe', age: 32, skills: [] }),
  positiveNumber: getOnlyPositiveNumber(1),
  notPositiveNumber: getOnlyPositiveNumber2(-1),
  taskSource: getTaskSource({ epic: null, isInternal: true, isDps: false }),
  businessLevel: getBusinessLevel('useReact'),
  onlyDefined: printOnlyDefined('aaa'),
  onlyDefined2: printOnlyDefinedWithDefault('not defined'),
  jsFail1: jsFail1(0),
  jsFail2: jsFail2(''),
}

export default conditions

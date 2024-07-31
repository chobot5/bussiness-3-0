import { useState } from 'react'

export const usePriority = (defaultValue: number, onPriorityChange: (newPriority: number) => void) => {
  const [myPriority, setMyPriority] = useState(defaultValue)

  const increasePriority = () => {
    const newPriority = myPriority + 1
    if (newPriority <= 5) {
      setMyPriority(newPriority)
      onPriorityChange(newPriority)
    }
  }

  const decreasePriority = () => {
    const newPriority = myPriority - 1
    if (newPriority >= 0) {
      setMyPriority(newPriority)
      onPriorityChange(newPriority)
    }
  }

  return { myPriority, increasePriority, decreasePriority }
}

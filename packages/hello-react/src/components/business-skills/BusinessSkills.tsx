import styles from './BusinessSkills.module.css'
import { useState } from 'react'
import { usePriority } from './usePriority.ts'

type Priority = 1 | 2 | 3

interface BusinessSkill {
  id: number
  label: string
  priority?: Priority
}

const skills: BusinessSkill[] = [
  { id: 1, label: 'gem' },
  { id: 2, label: 'react', priority: 1 },
  { id: 3, label: 'html', priority: 2 },
  { id: 4, label: 'css', priority: 3 },
  { id: 5, label: 'typescript' },
]

const colorMap: Record<Priority, string> = {
  ['1']: styles.alert,
  ['2']: styles.default,
  ['3']: styles.low,
}

interface BusinessSkillItemProps {
  skill: BusinessSkill
  onSkillChange: (skill: string, priority: number) => void
}

const BusinessSkillItem = ({ skill, onSkillChange }: BusinessSkillItemProps) => {
  const { myPriority, increasePriority, decreasePriority } = usePriority(0, (newPriority) =>
    onSkillChange(skill.label, newPriority),
  )

  return (
    <li className={skill.priority ? colorMap[skill.priority] : 'default'}>
      {skill.label}
      <strong>{myPriority}</strong>
      <button type={'button'} onClick={increasePriority}>
        Zvýšit
      </button>
      <button type={'button'} onClick={decreasePriority}>
        Snížit
      </button>
    </li>
  )
}

export const BusinessSkills = () => {
  const [lastPriority, setLastPriority] = useState<string | null>(null)

  return (
    <>
      <h3>Poslední nastavená priorita: {lastPriority ? lastPriority : 'Není nastaveno'}</h3>
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <BusinessSkillItem
            key={skill.id}
            skill={skill}
            onSkillChange={(skill, priority) => setLastPriority(`${skill}: ${priority}`)}
          />
        ))}
      </ul>
    </>
  )
}

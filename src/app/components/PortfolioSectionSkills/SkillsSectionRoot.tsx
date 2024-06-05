import { SkillsSectionItem } from './SkillsSectionItem'
import { skills } from './skills'

export function SkillsSectionRoot() {
  return (
    <div className="grid grid-flow-row auto-rows-auto grid-cols-portfolioSection gap-5">
      {skills.map((skill) => (
        <SkillsSectionItem
          key={skill.id}
          skillIcon={skill.icon}
          skillTitle={skill.title}
        />
      ))}
    </div>
  )
}

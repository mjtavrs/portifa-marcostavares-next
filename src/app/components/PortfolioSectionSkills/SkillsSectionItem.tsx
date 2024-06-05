import { ReactNode } from 'react'

interface SkillsSectionItemProps {
  skillIcon: ReactNode
  skillTitle: string
}

export function SkillsSectionItem({
  skillIcon,
  skillTitle,
}: SkillsSectionItemProps) {
  return (
    <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
      <div>
        <span className="text-3xl">{skillIcon}</span>
      </div>
      <div className="flex-1 text-center font-medium">
        <p>{skillTitle}</p>
      </div>
    </div>
  )
}

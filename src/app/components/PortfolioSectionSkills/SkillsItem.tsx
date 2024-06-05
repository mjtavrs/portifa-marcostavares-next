import { ReactNode } from 'react'

interface SkillsItemProps {
  skillIcon: ReactNode
  skillTitle: string
}

export function SkillsItem({ skillIcon, skillTitle }: SkillsItemProps) {
  return (
    <div className="hover:bg-portifa-grey-150 flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4 hover:cursor-pointer hover:transition-colors">
      <div>
        <span className="text-3xl">{skillIcon}</span>
      </div>
      <div className="flex-1 text-center font-medium">
        <p>{skillTitle}</p>
      </div>
    </div>
  )
}
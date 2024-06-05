import { ReactNode } from 'react'

interface SectionRootProps {
  children: ReactNode
}

export function SectionRoot({ children }: SectionRootProps) {
  return (
    <div className="grid w-full grid-flow-row auto-rows-auto grid-cols-portfolioSection gap-5">
      {children}
    </div>
  )
}

import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <div className="grid w-full grid-flow-row auto-rows-auto grid-cols-portfolioSection gap-5">
      {children}
    </div>
  )
}

import { ReactNode } from 'react'

interface SectionRootProps {
  title: string
  description?: string
  children: ReactNode
}

export function SectionRoot({
  title,
  description,
  children,
}: SectionRootProps) {
  return (
    <section className="flex flex-col items-center gap-8 px-5">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center">
          <span className="relative inline-block before:absolute before:-inset-1 before:bottom-1 before:top-4 before:block before:-skew-y-3 before:bg-portifa-yellow">
            <h2 className="relative text-3xl font-semibold text-portifa-grey-900">
              {title}.
            </h2>
          </span>
        </div>
        <p className="font-medium">{description}</p>
      </div>
      {children}
    </section>
  )
}

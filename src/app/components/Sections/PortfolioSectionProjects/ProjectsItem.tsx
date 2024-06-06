import { ReactNode } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { MdOutlineWeb } from 'react-icons/md'

interface ProjectsItemProps {
  projectTypeIcon: ReactNode
  projectTitle: string
  projectDescription: string
}

export function ProjectsItem({
  projectTypeIcon,
  projectTitle,
  projectDescription,
}: ProjectsItemProps) {
  return (
    <div className="space-y-10 rounded-md bg-portifa-grey-100 px-5 py-4 shadow-md">
      <div className="space-y-2">
        <div className="flex flex-col gap-4">
          <MdOutlineWeb className="text-4xl" />
          <h3 className="text-2xl font-bold">Maribe Arquitetura</h3>
        </div>
        <p>
          Maribe Arquitetura is an architecture firm based in Recife,
          Pernambuco, Brazil.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-fit cursor-pointer rounded-full bg-portifa-grey-900 p-2">
          <FaPlus className="text-2xl text-portifa-beige" />
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import { FaPlus } from 'react-icons/fa6'

interface ProjectsItemProps {
  projectCover: string
  projectTitle: string
}

export function ProjectsItem({
  projectCover,
  projectTitle,
}: ProjectsItemProps) {
  return (
    <div className="rounded-md bg-stone-200 shadow-sm hover:-translate-y-1 hover:shadow-md hover:duration-300">
      <div className="flex w-full justify-center rounded-t-md bg-zinc-100 py-20">
        <div>
          <Image src={projectCover} height={0} width={120} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 px-5 py-4">
        <h3 className="text-center text-2xl">{projectTitle}</h3>
        <div className="w-fit cursor-pointer rounded-full bg-portifa-grey-900 p-2">
          <FaPlus className="text-2xl text-portifa-beige" />
        </div>
      </div>
    </div>
  )
}

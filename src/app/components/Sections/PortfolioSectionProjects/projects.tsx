import { BiLogoJavascript, BiLogoJquery } from 'react-icons/bi'
import { FaSass, FaPhp } from 'react-icons/fa6'
import { ProjectsItem } from './ProjectsItem'

const projects = [
  {
    id: 1,
    cover: '/assets/maribeArquitetura.png',
    name: 'Maribe Arquitetura',
    description:
      'Maribe Arquitetura is an architecture firm based in Recife, Pernambuco, Brazil.',
    technologiesUsed: [
      <FaSass key={1} />,
      <BiLogoJavascript key={2} />,
      <BiLogoJquery key={3} />,
      <FaPhp key={4} />,
    ],
    repoLink: 'https://github.com/mjtavrs/maribe-dev',
    deployLink: 'https://maribe.arq.br',
  },
]

export function Projects() {
  return (
    <>
      {projects.map((project) => (
        <ProjectsItem
          key={project.id}
          projectCover={project.cover}
          projectTitle={project.name}
        />
      ))}
    </>
  )
}

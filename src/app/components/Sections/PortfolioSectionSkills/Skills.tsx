import { FaReact, FaGitAlt } from 'react-icons/fa6'
import { TbFileTypeSql } from 'react-icons/tb'
import {
  SiStyledcomponents,
  SiNextdotjs,
  SiExpress,
  SiJest,
} from 'react-icons/si'
import { BiLogoTypescript, BiLogoTailwindCss } from 'react-icons/bi'

import { SkillsItem } from './SkillsItem'

const skills = [
  {
    id: 1,
    icon: <BiLogoTailwindCss />,
    title: 'Tailwind CSS',
  },
  {
    id: 2,
    icon: <SiStyledcomponents />,
    title: 'Styled Components',
  },
  {
    id: 3,
    icon: <BiLogoTypescript />,
    title: 'TypeScript',
  },
  {
    id: 4,
    icon: <FaReact />,
    title: 'React',
  },
  {
    id: 5,
    icon: <SiNextdotjs />,
    title: 'Next.js',
  },
  {
    id: 6,
    icon: <SiExpress />,
    title: 'Express',
  },
  {
    id: 7,
    icon: <TbFileTypeSql />,
    title: 'SQL',
  },
  {
    id: 8,
    icon: <FaGitAlt />,
    title: 'Git',
  },
  {
    id: 9,
    icon: <SiJest />,
    title: 'Jest',
  },
]

export function Skills() {
  return (
    <>
      {skills.map((skill) => (
        <SkillsItem
          key={skill.id}
          skillIcon={skill.icon}
          skillTitle={skill.title}
        />
      ))}
    </>
  )
}

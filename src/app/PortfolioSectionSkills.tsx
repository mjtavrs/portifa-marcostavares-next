import { FaSass, FaReact, FaNode, FaGitAlt, FaGithub } from 'react-icons/fa6'
import { DiPostgresql } from 'react-icons/di'
import {
  SiStyledcomponents,
  SiVite,
  SiNextdotjs,
  SiExpress,
  SiSqlite,
  SiJest,
} from 'react-icons/si'
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoMongodb,
} from 'react-icons/bi'
// import { ReactNode } from 'react'

// interface PortfolioSectionSkillsProps {
//   logo: ReactNode
//   title: string
// }

export function PortfolioSectionSkills() {
  return (
    <div className="grid grid-flow-row auto-rows-auto grid-cols-portfolioSection gap-5">
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <FaSass className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>Sass</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <BiLogoTailwindCss className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>Tailwind CSS</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <SiStyledcomponents className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>Styled Components</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <BiLogoTypescript className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>TypeScript</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <FaReact className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>React</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <SiVite className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>Vite</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <SiNextdotjs className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>Next.js</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <FaNode className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>Node.js</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <SiExpress className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>Express</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <BiLogoMongodb className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>MongoDB</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <SiSqlite className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>SQLite</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <DiPostgresql className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>PostgreSQL</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <FaGitAlt className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>Git</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <FaGithub className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>Github</p>
        </div>
      </div>
      <div className="flex items-center rounded-lg bg-portifa-grey-100 px-5 py-4">
        <div>
          <SiJest className="text-3xl" />
        </div>
        <div className="flex-1 text-center font-medium">
          <p>Jest</p>
        </div>
      </div>
    </div>
  )
}

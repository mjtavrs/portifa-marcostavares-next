import { Logo } from './Logo'
import { Skills } from './components/Sections/PortfolioSectionSkills/Skills'
import { Projects } from './components/Sections/PortfolioSectionProjects/Projects'
import { SectionRoot } from './components/SectionRoot'
import { SectionWrapper } from './components/SectionWrapper'

import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6'

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between px-5 pt-3">
        <Logo color="#232122" height={60} width={110} />
        <ul className="flex gap-5">
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Qualifications</a>
          </li>
          <li>
            <a href="#">Curriculum</a>
          </li>
        </ul>
        <button className="rounded-full bg-portifa-yellow px-6 py-1 font-semibold">
          Let&apos;s Talk.
        </button>
      </nav>
      <div className="space-y-20">
        <SectionRoot
          title="Skills"
          description="Here's the list of the tools I've studied and used to create some of my projects."
        >
          <SectionWrapper>
            <Skills />
          </SectionWrapper>
        </SectionRoot>
        <SectionRoot
          title="Portfolio"
          description="Oh, you curious to see how I used these skills? Here are the projects that I created or participated so far."
        >
          <SectionWrapper>
            <Projects />
          </SectionWrapper>
        </SectionRoot>
      </div>
      <div className="mt-40 bg-portifa-grey-900 text-portifa-beige">
        <Logo color="#f2efe6" height={120} width={170} />
        <ul>
          <li>
            <a href="http://" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              <FaMedium />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

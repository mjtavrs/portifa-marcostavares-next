import { Logo } from './Logo'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6'

export function Footer() {
  return (
    <div className="mt-40 flex flex-col items-center gap-2 border-t-4 border-stone-500 bg-portifa-grey-900 py-14 text-portifa-beige">
      <Logo color="#f2efe6" height={170} width={220} />
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-thin">Check my social profiles:</p>
        <ul className="flex items-center gap-3">
          <li>
            <a
              href="https://www.linkedin.com/in/devmarcostavaress/"
              target="_blank"
              title="Visit my Linkedin profile"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mjtavrs"
              target="_blank"
              title="Check my Github repositories"
            >
              <FaGithub className="text-3xl" />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@dev.marcostavares"
              target="_blank"
              title="Visit my Medium profile"
            >
              <FaMedium className="text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

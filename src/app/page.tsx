import { Logo } from './Logo'
import { BiLogoTypescript } from 'react-icons/bi'

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between px-5 pt-3">
        <Logo />
        <ul className="flex gap-5">
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
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
      <section className="flex flex-col items-center gap-8 px-5">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <span className="relative inline-block before:absolute before:-inset-1 before:bottom-1 before:top-4 before:block before:-skew-y-3 before:bg-portifa-yellow">
              <h2 className="relative text-3xl font-semibold text-portifa-grey-900">
                Skills.
              </h2>
            </span>
          </div>
          <p className="font-medium">
            Here&apos;s the list of my current abilities.
          </p>
        </div>
        <div className="grid grid-cols-portfolioSection gap-4">
          <div className="flex items-center rounded-lg bg-portifa-grey-100 px-4 py-3">
            <div>
              <BiLogoTypescript className="text-3xl" />
            </div>
            <div className="flex-1 text-center font-medium">
              <p>TypeScript</p>
            </div>
          </div>
          <div className="flex items-center rounded-lg bg-portifa-grey-100 px-4 py-3">
            <div>
              <BiLogoTypescript className="text-3xl" />
            </div>
            <div className="flex-1 text-center font-medium">
              <p>TypeScript</p>
            </div>
          </div>
          <div className="flex items-center rounded-lg bg-portifa-grey-100 px-4 py-3">
            <div>
              <BiLogoTypescript className="text-3xl" />
            </div>
            <div className="flex-1 text-center font-medium">
              <p>TypeScript</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Logo } from './Logo'
import { PortfolioSection } from './PortfolioSection'

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
      <PortfolioSection
        title="Skills"
        description="Here's the list of the tools I use to create my projects."
      />
    </>
  )
}

import { Link, routes } from '@redwoodjs/router'

type GardenLayoutProps = {
  children?: React.ReactNode
}

const GardenLayout = ({ children }: GardenLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Garden site</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default GardenLayout

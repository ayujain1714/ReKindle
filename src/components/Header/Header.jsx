import {Link, NavLink} from 'react-router-dom'
import Logo from '../../assets/Logo.svg'

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-primary border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              className="mr-3 h-10"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2 text-md font-grotesk font-black">
            <Link
              to="#"
              className="text-light hover:bg-orange-700 focus:ring-4 focus:ring-cyan-300 rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-light bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign Up
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex text-xl font-grotesk font-black lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                to="/"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-tertiary" : "text-light"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/events"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-tertiary" : "text-light"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary lg:p-0`
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/donate"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-tertiary" : "text-light"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary lg:p-0`
                  }
                >
                  Donate
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/alumdir"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-tertiary" : "text-light"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary lg:p-0`
                  }
                >
                  Alumini
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/jobportal"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-tertiary" : "text-light"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary lg:p-0`
                  }
                >
                  Job Portal
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

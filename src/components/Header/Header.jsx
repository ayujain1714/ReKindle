import { Link, NavLink } from "react-router-dom";
import GOG from "../../assets/Government_Of_Gujarat_Seal.svg";
import Line from "../../assets/Line.svg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="border-gray-200 bg-csec px-2 py-1 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link
            to="/"
            className="flex items-center justify-evenly font-grotesk text-xl font-black"
          >
            <div className="flex items-center justify-evenly gap-2">
              <img src={GOG} className="h-10" alt="Logo" />
              <img src={Line} className="h-10 w-0.5" alt="Line" />
              <p>Govt. of Gujarat</p>
            </div>
          </Link>
          <div className="flex items-center font-grotesk font-black lg:order-2">
            <Link
              to="#"
              className="mr-2 rounded-lg px-2 py-1 text-cpri hover:bg-cpri focus:outline-none focus:ring-2 focus:ring-cyan-900"
            >
              Sign In
            </Link>
            <Link
              to="#"
              className="mr-2 rounded-lg bg-cpri px-2 py-1 text-clight hover:bg-cdark focus:outline-none focus:ring-2 focus:ring-cyan-900"
            >
              Sign Up
            </Link>
          </div>
          <div
            className="hidden w-full items-center justify-between font-grotesk text-xl font-black lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-black lg:mt-0 lg:flex-row lg:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-clight text-cdark" : "text-clight"} px-2 hover:text-cpri lg:border-0`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-clight text-cdark" : "text-clight"} px-2 hover:text-cpri lg:border-0`
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-clight text-cdark" : "text-clight"} px-2 hover:text-cpri lg:border-0`
                }
              >
                Donate
              </NavLink>
              <NavLink
                to="/alumini"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-clight text-cdark" : "text-clight"} px-2 hover:text-cpri lg:border-0`
                }
              >
                Alumini
              </NavLink>
              <NavLink
                to="/jobportal"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-clight text-cdark" : "text-clight"} px-2 hover:text-cpri lg:border-0`
                }
              >
                Job Portal
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

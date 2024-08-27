import { Link, NavLink } from "react-router-dom";
import GOG from "../../assets/Government_Of_Gujarat_Seal.svg";
import Line from "../../assets/Line.svg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow max-md:w-[450px]">
      <nav className="border-gray-200 bg-csec px-2 py-1">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link
            to="/"
            className="flex items-center justify-evenly font-grotesk text-xl font-black"
          >
            <div className="flex items-center justify-evenly gap-2">
              <img src={GOG} className="h-10" alt="Logo" />
              <img src={Line} className="h-10 w-0.5 max-md:hidden" alt="Line" />
              <p className="max-md:hidden">Govt. of Gujarat</p>
            </div>
          </Link>
          <div className="order-2 flex items-center font-grotesk font-black">
            <Link
              to="#"
              className="rounded-lg bg-cpri px-3 py-1 text-xl text-clight hover:bg-cdark focus:outline-none focus:ring-2 focus:ring-cyan-900 max-md:px-2 max-md:text-sm"
            >
              Sign In
            </Link>
          </div>
          <div className="flex items-center justify-between font-grotesk text-xl font-black max-md:text-sm lg:order-1">
            <ul className="mt-0 flex flex-row space-x-1 font-black lg:space-x-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-3xl py-1 duration-200 ${isActive ? "bg-clight text-cdark" : "text-clight"} border-0 px-3 hover:text-cpri max-md:rounded-2xl max-md:px-2`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-clight text-cdark" : "text-clight"} px-3 hover:text-cpri max-md:px-2 lg:border-0`
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-clight text-cdark" : "text-clight"} px-3 hover:text-cpri max-md:px-2 lg:border-0`
                }
              >
                Donate
              </NavLink>
              <NavLink
                to="/alumini"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-clight text-cdark" : "text-clight"} px-3 hover:text-cpri max-md:px-2 lg:border-0`
                }
              >
                Alumini
              </NavLink>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-clight text-cdark" : "text-clight"} px-3 hover:text-cpri max-md:px-2 lg:border-0`
                }
              >
                Jobs
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

import { Link, NavLink } from "react-router-dom";
import AluminiRelations from "../../assets/Alumini_Relations.svg";

export default function Header() {
  return (
    <header id="Header" className="sticky top-0 z-50 shadow-lg max-md:w-[450px]">
      <nav className="border-gray-200 bg-wsec px-2 py-2 max-md:py-1">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link
            to="/"
            className="flex items-center justify-evenly gap-2 font-grotesk text-xl font-black"
          >
            <img
              src={AluminiRelations}
              className="h-10 max-md:hidden"
              alt="Logo"
            />
          </Link>
          <div className="order-2 flex items-center font-grotesk font-black">
            <Link
              to="/signin"
              className="text-wlight rounded-lg bg-wpri px-3 py-1 text-xl hover:bg-wdark hover:text-clight focus:outline-none focus:ring-2 focus:ring-amber-900 max-md:px-2 max-md:text-sm"
            >
              Sign In
            </Link>
          </div>
          <div className="flex items-center justify-between font-grotesk text-xl font-black max-md:text-sm lg:order-1">
            <ul className="mt-0 flex flex-row space-x-1 font-black lg:space-x-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-3xl py-1 duration-200 ${isActive ? "bg-wlight text-wdark" : "text-clight"} border-0 px-3 hover:text-wpri max-md:rounded-2xl max-md:px-2`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-wlight text-wdark" : "text-clight"} px-3 hover:text-wpri max-md:px-2 lg:border-0`
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-wlight text-wdark" : "text-clight"} px-3 hover:text-wpri max-md:px-2 lg:border-0`
                }
              >
                Donate
              </NavLink>
              <NavLink
                to="/alumini"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-wlight text-wdark" : "text-clight"} px-3 hover:text-wpri max-md:px-2 lg:border-0`
                }
              >
                Alumini
              </NavLink>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-wlight text-wdark" : "text-clight"} px-3 hover:text-wpri max-md:px-2 lg:border-0`
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

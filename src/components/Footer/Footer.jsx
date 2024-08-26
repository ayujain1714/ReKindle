import { Link, NavLink } from "react-router-dom";
import Location from "../../assets/Location.svg";
import Phone from "../../assets/Phone.svg";
import Email from "../../assets/Envelope.svg";
import LinkedIn from "../../assets/LinkedIn.svg";
import Instagram from "../../assets/Instagram.svg";
import facebook from "../../assets/facebook.svg";
import Discord from "../../assets/Discord.svg";
import Line from "../../assets/Line.svg";

export default function Footer() {
  return (
    <footer className="sticky top-0 z-10 shadow">
      <nav className="bg-csec px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl justify-center">
          <div className="text-md flex w-screen items-center justify-between font-poppins font-black lg:order-1 lg:flex lg:w-auto">
            <ul className="flex flex-col items-center justify-around font-black">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block rounded-3xl duration-200 ${isActive ? "text-cdark" : "text-clight"} hover:text-cpri`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block rounded-3xl duration-200 ${isActive ? "text-cdark" : "text-clight"} hover:text-cpri`
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  `block rounded-3xl duration-200 ${isActive ? "text-cdark" : "text-clight"} hover:text-cpri`
                }
              >
                Donate
              </NavLink>
              <NavLink
                to="/alumini"
                className={({ isActive }) =>
                  `block rounded-3xl duration-200 ${isActive ? "text-cdark" : "text-clight"} hover:text-cpri`
                }
              >
                Alumini
              </NavLink>
              <NavLink
                to="/jobportal"
                className={({ isActive }) =>
                  `block rounded-3xl duration-200 ${isActive ? "text-cdark" : "text-clight"} hover:text-cpri`
                }
              >
                Job Portal
              </NavLink>
            </ul>
            <ul className="flex flex-col gap-1 font-black">
              <li className="flex gap-2">
                <img src={Location} className="h-5 w-5" alt="Location" />
                <Link
                  to="#"
                  className="block w-96 py-2 pl-3 pr-4 text-cpri duration-200 hover:text-cdark lg:p-0"
                >
                  Block No-7, 1st Floor, Block No-1, Sardar Patel Bhavan, New
                  Sachivalay Gandhinagar, Gujarat
                </Link>
              </li>
              <li className="flex gap-2">
                <img src={Phone} className="h-5 w-5" alt="Phone" />
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-cpri duration-200 hover:text-cdark lg:p-0"
                >
                  +91 12345 67890, +91 12345 67890
                </Link>
              </li>
              <li className="flex gap-2">
                <img src={Email} className="h-5 w-5" alt="Email" />
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-cpri duration-200 hover:text-cdark lg:p-0"
                >
                  alumniaffairs@admin.iitd.ac.in
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col justify-center gap-1 font-black">
              <li className="flex gap-2">
                <img src={LinkedIn} className="h-5 w-5" alt="LinkedIn" />
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-cpri duration-200 hover:text-cdark lg:p-0"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="flex gap-2">
                <img src={facebook} className="h-5 w-5" alt="facebook" />
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-cpri duration-200 hover:text-cdark lg:p-0"
                >
                  facebook
                </Link>
              </li>
              <li className="flex gap-2">
                <img src={Instagram} className="h-5 w-5" alt="Instagram" />
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-cpri duration-200 hover:text-cdark lg:p-0"
                >
                  Instagram
                </Link>
              </li>
              <li className="flex gap-2">
                <img src={Discord} className="h-5 w-5" alt="Discord" />
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-cpri duration-200 hover:text-cdark lg:p-0"
                >
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <img src={Line} className="my-2 h-0.5 w-screen" />
        <div className="flex flex-row justify-between font-poppins font-black text-cdark">
          <p>© Copyright 2024, Alumini Relations, Government of Gujarat</p>
          <p>Developed & Maintained by: lorem ipsum</p>
        </div>
      </nav>
    </footer>
  );
}

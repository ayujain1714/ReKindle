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
    <footer className="sticky top-0 z-10 bg-csec max-md:w-[450px]">
      <div className="mx-auto flex justify-center">
        <div className="text-md flex w-screen flex-wrap justify-around py-2 font-poppins font-black">
          <ul className="my-auto flex flex-col justify-around font-black max-md:hidden">
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
          <ul className="my-auto flex flex-col gap-1 text-start font-black max-md:order-2 max-md:mx-auto max-md:py-5">
            <li className="flex gap-2">
              <img src={Location} className="h-5 w-5" alt="Location" />
              <Link
                to="#"
                className="block w-96 text-cpri duration-200 hover:text-cdark"
              >
                Block No-7, 1st Floor, Sardar Patel Bhavan, New Sachivalay
                Gandhinagar, Gujarat
              </Link>
            </li>
            <li className="flex gap-2">
              <img src={Phone} className="h-5 w-5" alt="Phone" />
              <Link
                to="#"
                className="block text-cpri duration-200 hover:text-cdark"
              >
                +91 12345 67890, +91 12345 67890
              </Link>
            </li>
            <li className="flex gap-2">
              <img src={Email} className="h-5 w-5" alt="Email" />
              <Link
                to="#"
                className="block text-cpri duration-200 hover:text-cdark"
              >
                alumniaffairs@admin.iitd.ac.in
              </Link>
            </li>
          </ul>
          <ul className="max my-auto flex flex-col justify-center font-black max-md:order-1 max-md:flex-row max-md:gap-5 max-md:pt-5 lg:gap-1">
            <li className="flex gap-2">
              <img
                src={LinkedIn}
                className="h-5 w-5 max-md:hidden"
                alt="LinkedIn"
              />
              <Link
                to="#"
                className="block text-cpri duration-200 hover:text-cdark"
              >
                LinkedIn
              </Link>
            </li>
            <li className="flex gap-2">
              <img
                src={facebook}
                className="h-5 w-5 max-md:hidden"
                alt="facebook"
              />
              <Link
                to="#"
                className="block text-cpri duration-200 hover:text-cdark"
              >
                facebook
              </Link>
            </li>
            <li className="flex gap-2">
              <img
                src={Instagram}
                className="h-5 w-5 max-md:hidden"
                alt="Instagram"
              />
              <Link
                to="#"
                className="block text-cpri duration-200 hover:text-cdark"
              >
                Instagram
              </Link>
            </li>
            <li className="flex gap-2">
              <img
                src={Discord}
                className="h-5 w-5 max-md:hidden"
                alt="Discord"
              />
              <Link
                to="#"
                className="block text-cpri duration-200 hover:text-cdark"
              >
                Discord
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <img src={Line} className="h-0.5 w-screen max-md:w-[450px]" />
      <div className="flex flex-row justify-around gap-5 px-5 py-2 font-poppins font-black text-cdark">
        <p>© Copyright 2024, Government of Gujarat</p>
        <p>Developed by: lorem ipsum</p>
      </div>
    </footer>
  );
}

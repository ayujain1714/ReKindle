import { Link, NavLink } from "react-router-dom";
import GOG from "../../assets/Government_Of_Gujarat_Seal.svg";
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
    <footer className="bg-csec max-md:w-[450px]">
      <div className="mx-auto w-full max-w-screen-xl px-5 py-2">
        <div className="-mb-3 flex justify-around font-grotesk">
          <div className="flex flex-row items-center max-md:block lg:space-x-16">
            <div>
              <Link to="/" className="flex items-center">
                <img src={GOG} className="h-36 max-md:hidden" alt="Logo" />
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="flex items-center justify-center text-lg font-extrabold uppercase text-gray-900 max-md:hidden">
                Resources
              </h2>
              <ul className="flex flex-col items-center font-black text-cdark max-md:hidden">
                <li className="">
                  <Link to="/" className="font-bold hover:text-cpri">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="font-black hover:text-cpri">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/donate" className="font-black hover:text-cpri">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/alumini" className="font-black hover:text-cpri">
                    Alumini
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="font-black hover:text-cpri">
                    Jobs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-96">
              <h2 className="mb-2 text-lg font-extrabold uppercase">
                Contact Us
              </h2>
              <ul className="flex flex-col justify-center space-y-1 font-black text-cdark max-md:space-y-3">
                <li className="flex items-center gap-2">
                  <svg
                    fill="#00404D"
                    height="28px"
                    width="28px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>envelope</title>{" "}
                      <path d="M0 22.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-12q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v12zM4 20v-8l12 8 12-8v8l-5.984-2.016 5.408 5.44q-0.608 0.576-1.408 0.576h-20q-0.864 0-1.408-0.576l5.408-5.408zM4.736 8.512q0.576-0.512 1.28-0.512h20q0.704 0 1.248 0.512l-11.264 7.488z"></path>{" "}
                    </g>
                  </svg>
                  <Link to="#" className="text-cdark hover:text-cpri">
                    <p>Block No-7, 1st Floor, Sardar Patel Bhavan,</p>
                    <p>New Sachivalay, Gandhinagar, Gujarat</p>
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#00404D"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25"
                  >
                    <path d="M17.5,24C9.351,24.229-5.075,9.787,1.862,1.938,1.887,1.914,2.954.984,2.954.984a3.583,3.583,0,0,1,4.908.041l2.152,2.318a3.522,3.522,0,0,1-.039,4.91l-.388.394a11.6,11.6,0,0,0,5.754,5.778l.411-.4a3.585,3.585,0,0,1,4.945,0L22.934,16.1a3.515,3.515,0,0,1,.082,4.946s-.93,1.066-.954,1.091A6.39,6.39,0,0,1,17.5,24ZM3.95,4.1C-.909,10.118,14.644,24.773,19.905,20.05c0,0,.924-1.059.949-1.083a.5.5,0,0,0,0-.707l-2.238-2.074c-.3-.25-.469-.253-.747-.04l-1.136,1.118a1.5,1.5,0,0,1-1.587.332A14.852,14.852,0,0,1,6.414,8.877a1.5,1.5,0,0,1,.323-1.61L7.845,6.141a.485.485,0,0,0,.009-.717L5.7,3.106a.487.487,0,0,0-.667.04C5.009,3.171,3.95,4.1,3.95,4.1ZM16.808,15.086h0ZM24,9.5A9.511,9.511,0,0,0,14.5,0a1.5,1.5,0,0,0,0,3A6.508,6.508,0,0,1,21,9.5a1.5,1.5,0,0,0,3,0Zm-5,0A4.505,4.505,0,0,0,14.5,5a1.5,1.5,0,0,0,0,3A1.5,1.5,0,0,1,16,9.5a1.5,1.5,0,0,0,3,0Z" />
                  </svg>
                  <Link to="#" className="text-cdark hover:text-cpri">
                    +91 12345 67890, +91 12345 67890
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    fill="#00404D"
                    height="25px"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-8.91 -8.91 314.82 314.82"
                    xml:space="preserve"
                    stroke="#00404D"
                    stroke-width="14.85"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="14"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645 c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645 C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892 c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"></path>{" "}
                        <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614 c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901 c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104 C179.265,127.948,165.464,141.901,148.5,141.901z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <Link to="#" className="text-cdark hover:text-cpri">
                    alumniaffairs@admin.iitd.ac.in
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 flex items-center justify-center text-lg font-semibold uppercase text-gray-900">
                Follow us
              </h2>
              <ul className="flex flex-col justify-center font-black max-md:order-1 max-md:flex-row max-md:space-x-3 lg:gap-1">
                <Link
                  to="#"
                  className="flex items-center gap-1 text-cdark duration-200 hover:text-cpri"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                  facebook
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-1 text-cdark duration-200 hover:text-cpri"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                  LinkedIn
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-1 text-cdark duration-200 hover:text-cpri"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                  Twitter
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-1 text-cdark duration-200 hover:text-cpri"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                  </svg>
                  Instagram
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-5 border-cdark" />
        <div className="flex flex-wrap items-center justify-between font-poppins font-black text-cdark max-md:flex-col">
          <span className="text-md text-center">
            © 2024&nbsp;
            <Link
              href="#"
              className="hover:text-cpri hover:underline hover:decoration-dashed hover:underline-offset-4"
            >
              lorem ipsum
            </Link>
            . All Rights Reserved.
          </span>
          <span className="text-md text-center">
            Developed By : Team&nbsp;
            <Link
              href="#"
              className="hover:text-cpri hover:underline hover:decoration-dashed hover:underline-offset-4"
            >
              lorem ipsum
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

import pkg from "react-icons/gi/index";
const { GiHamburger } = pkg;
import { Link } from "react-scroll";

const Card = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <GiHamburger />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                activeClass="active"
                to="aboutme"
                duration={600}
                spy={true}
                smooth={true}
              >
                01. About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                duration={600}
                spy={true}
                smooth={true}
              >
                02. Recent Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="getintouch"
                duration={600}
                spy={true}
                smooth={true}
              >
                03. Get In Touch
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">SA</a>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              activeClass="active"
              to="aboutme"
              duration={600}
              spy={true}
              smooth={true}
            >
              01. About Me
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              duration={600}
              spy={true}
              smooth={true}
            >
              02. Recent Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="getintouch"
              duration={600}
              spy={true}
              smooth={true}
            >
              03. Get In Touch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

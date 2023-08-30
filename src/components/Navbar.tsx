// import { GiHamburger } from "react-icons/gi";
// import { Link } from "react-scroll";

// const Card = () => {
//   return (
//     <div className="navbar bg-base-100 px-16">
//       <div className="navbar-start">
//         <p className="text-xl">SA</p>
//       </div>
//       <div className="navbar-end">
//         <div className="navbar-center">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost btn-circle">
//               <GiHamburger className="w-8 h-8" />
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <Link
//                   activeClass="active"
//                   to="aboutme"
//                   duration={600}
//                   spy={true}
//                   smooth={true}
//                 >
//                   01. About Me
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   activeClass="active"
//                   to="projects"
//                   duration={600}
//                   spy={true}
//                   smooth={true}
//                 >
//                   02. Recent Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   activeClass="active"
//                   to="getintouch"
//                   duration={600}
//                   spy={true}
//                   smooth={true}
//                 >
//                   03. Get In Touch
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* <button className="btn btn-ghost btn-circle">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             />
//           </svg>
//         </button>
//         <button className="btn btn-ghost btn-circle">
//           <div className="indicator">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//               />
//             </svg>
//             <span className="badge badge-xs badge-primary indicator-item bg-POrange"></span>
//           </div>
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default Card;

import { GiHamburger } from "react-icons/gi";
import { Link } from "react-scroll";

const Card = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
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

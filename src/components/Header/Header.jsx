import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const navLink = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Recipes</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Search</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a
          href="index.html"
          className="text-2xl md:text-[32px] font-bold ml-auto lg:ml-0 cursor-pointer hidden md:block"
        >
          Recipe Calories
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <div className="relative">
          <CiSearch className="absolute left-2 top-3 text-lg" />
          <input
            type="text"
            placeholder="Search"
            className="border py-2 pl-7 rounded-3xl"
          />
        </div>
        <p className="bg-green-400 p-3 rounded-full ml-2">
          <FaRegUserCircle className="text-xl" />
        </p>
      </div>
    </div>
  );
};

export default Header;

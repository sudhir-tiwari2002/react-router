import React from "react";
import { Link, NavLink } from "react-router-dom";


function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://scontent.fpnq7-2.fna.fbcdn.net/v/t39.30808-6/441207365_870668511739950_8419131231732489623_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NKk4THf2vQEQ7kNvgE3IlhD&_nc_ht=scontent.fpnq7-2.fna&oh=00_AfBwq-GePe48GaSS7CuU4ELvsvuv_OL9eAlSnR1O-nsyqw&oe=663D67C0"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          {/* <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div> */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? " text-blue-500" : " text-gray-700"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                  }
                >
                  Home
                </NavLink>
                
              </li>
              <li>
                <NavLink
                to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? " text-blue-500" : " text-gray-700"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                  }
                >
                  Our Courses
                </NavLink>
                
              </li>
              <li>
                <NavLink
                to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? " text-blue-500" : " text-gray-700"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
                
              </li>
              {/* <li>
                <NavLink
                to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? " text-orange-700" : " text-gray-700"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                 Github
                </NavLink>
                
              </li> */}
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
import Assets from "../../Pixel_Images";
import Images from "../../Pixel_Images";

export default Header;

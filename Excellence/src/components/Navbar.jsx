import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons for Hamburger and Close Icon
import { useAuth } from "../store/auth";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, user } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-900 text-white z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">
          <img
            src="/images/excellence.png"
            alt="logo"
            className="w-20 rounded-3xl"
          />
        </div>
        <button
          className="text-2xl sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden sm:flex space-x-8 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
              }
            >
              Contact
            </NavLink>
          </li>
          {user && user.isAdmin ? (
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
              }
              >
                Admin
              </NavLink>
            </li>
          ) : (
            ""
          )}
          {isLoggedIn ? (
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 font-bold"
                    : "hover:text-indigo-500"
                }
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-500 font-bold"
                      : "hover:text-indigo-500"
                  }
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-500 font-bold"
                      : "hover:text-indigo-500"
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-gray-900 py-4 px-6">
          <ul className="space-y-4 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 font-bold"
                    : "hover:text-indigo-500"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 font-bold"
                    : "hover:text-indigo-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
              }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 font-bold"
                    : "hover:text-indigo-500"
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
            {user && user.isAdmin ? (
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
              }
                >
                  Admin
                </NavLink>
              </li>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <li>
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-500 font-bold"
                      : "hover:text-indigo-500"
                  }
                  onClick={toggleMenu}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-indigo-500 font-bold"
                        : "hover:text-indigo-500"
                    }
                    onClick={toggleMenu}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "text-indigo-500 font-bold"
                        : "hover:text-indigo-500"
                    }
                    onClick={toggleMenu}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

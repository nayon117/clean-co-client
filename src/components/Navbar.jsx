import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {

  const {user,logOut} = useAuth()

  const handleLogOut = () => {
    logOut()
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 w-full">
    <div className="flex-none lg:hidden">
      <label
        htmlFor="my-drawer-3"
        aria-label="open sidebar"
        className="btn btn-square btn-ghost"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
    <div className="flex-1 px-2 mx-2">CleanCo</div>
    <div className="flex-none hidden lg:block">
      <div className="flex gap-3">
        {/* Navbar menu content here */}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-primary btn-sm"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "btn btn-primary btn-sm"
              : ""
          }
        >
          About
          </NavLink>
          
          {
            user?.email ? <button onClick={handleLogOut} className="btn btn-sm">Log out</button> :  <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "btn btn-primary btn-sm"
                : ""
            }
          >
            Login
          </NavLink>
       }
      </div>
    </div>
  </div>
  );
};
export default Navbar;
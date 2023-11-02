import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3">
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
    <NavLink
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
  </div>
  );
};
export default Sidebar;
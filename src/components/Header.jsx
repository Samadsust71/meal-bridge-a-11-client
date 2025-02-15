import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/meal-bridge-logo.png";
import userIcon from "../assets/userIcon.jpg";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Header = () => {
  const { signOutUser, user } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Log out successfully!");
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong");
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold underline underline-offset-2"
              : "text-gray-800"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold underline underline-offset-2"
              : "text-gray-800"
          }
          to={"/available-foods"}
        >
          Available Foods
        </NavLink>
      </li>
      
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                 ? "text-primary font-semibold underline underline-offset-2"
              : "text-gray-800"
            }
            to={"/add-food"}
          >
            Add Food
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                 ? "text-primary font-semibold underline underline-offset-2"
              : "text-gray-800"
            }
            to={"/manage-my-foods"}
          >
            Manage My Foods
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold underline underline-offset-2"
              : "text-gray-800"
            }
            to={"/my-food-request"}
          >
            My Food Request
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold underline underline-offset-2"
              : "text-gray-800"
          }
          to={"/stories"}
        >
          News & Stories
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#DBDADA] backdrop-blur-sm sticky top-0 right-0 z-50 h-24">
      <div className=" w-11/12 mx-auto navbar py-5 p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100  rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <div className="block">
              <img
                src={logo}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-2xl font-bold text-primary">MealBridge</h1>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-4">{links}</ul>
        </div>
        <div className="navbar-end items-center">
          <div className="flex gap-2 items-center">
            {user && (
              <div className="relative">
                <div className="group">
                  <img
                    src={user.photoURL || userIcon}
                    className="h-10 w-10 rounded-full object-cover"
                    alt="user"
                  />
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-12 bg-white text-primary text-sm py-1 pl-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-[100px] z-20">
                    {user?.displayName}
                  </div>
                </div>
              </div>
            )}

            {user ? (
              <button
                onClick={handleSignOut}
                 className="bg-primary-bg hover:bg-primary-bg/80 px-5 py-3 rounded-full shadow-xl text-white transition-all duration-300 font-bold"
              >
                Logout
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate("/login")}
                   className="bg-primary-bg hover:bg-primary-bg/80 px-5 py-3 rounded-full shadow-xl text-white transition-all duration-300 font-bold"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="bg-primary-bg hover:bg-primary-bg/80 px-5 py-3 rounded-full shadow-xl text-white transition-all duration-300 font-bold"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

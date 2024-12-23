import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/meal-bridge-logo-rs.png";
import userIcon from "../assets/userIcon.jpg";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Header = () => {
  const { signOutUser, user } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign out successfullY!");
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
              ? "text-[#232323] font-semibold underline underline-offset-2"
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
              ? "text-[#232323] font-semibold underline underline-offset-2"
              : "text-gray-800"
          }
          to={"/available-foods"}
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#232323] font-semibold underline underline-offset-2"
              : "text-gray-800"
          }
          to={"/stories"}
        >
          Stories
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                 ? "text-[#232323] font-semibold underline underline-offset-2"
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
                 ? "text-[#232323] font-semibold underline underline-offset-2"
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
                ? "text-[#232323] font-semibold underline underline-offset-2"
              : "text-gray-800"
            }
            to={"/my-food-request"}
          >
            My Food Request
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="w-11/12 mx-auto sticky top-2 right-0 z-50 h-28 mb-6">
      <div className="navbar p-5 bg-gray-100 backdrop-blur-sm rounded-full">
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
            <div className="">
              <h1 className="text-2xl font-bold text-[#232323]">MealBridge</h1>
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
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-12 bg-white text-gray-800 text-sm py-1 pl-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-[100px] z-20">
                    {user?.displayName}
                  </div>
                </div>
              </div>
            )}

            {user ? (
              <button
                onClick={handleSignOut}
                 className="bg-[#90BE6D] px-5 py-4 rounded-full shadow-xl text-white transition-all duration-300 font-bold"
              >
                Logout
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate("/login")}
                   className="bg-[#90BE6D] px-5 py-4 rounded-full shadow-xl text-white transition-all duration-300 font-bold"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="bg-[#90BE6D] px-5 py-4 rounded-full shadow-xl text-white transition-all duration-300 font-bold"
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

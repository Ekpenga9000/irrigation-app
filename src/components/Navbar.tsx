import { Link } from "react-router-dom";
import { PiPlantBold } from "react-icons/pi";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaRegCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reduxState/store";
import { logout } from "../reduxState/authSlice/authSlice";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-[2.5rem] w-[2.5rem] flex  rounded-full bg-teal-500 rotate-3 relative">
            <PiPlantBold className="text-2xl absolute top-[-0.5rem] left-[-0.5rem]" />
          </span>
          <span className="font-semibold text-2xl">
            Aqua<span className="text-orange-400">Sense</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {isAuthenticated && user ? (
            <li>
              <Link
                to="/dashboard"
                className="font-semibold text-lg flex items-center gap-1">
                <span>
                  <RxDashboard />
                </span>
                Dashboard
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="font-semibold text-lg flex items-center gap-1">
                <FaRegCircleUser />
                Login
              </Link>
            </li>
          )}
           {isAuthenticated && user && (
            <li className="cursor-pointer">
              <img src={user.imageLink} alt={user.fullname} className="h-[3rem] w-[3rem] object-cover rounded-full" />
            </li>
          )}
          {isAuthenticated && user && (
            <li>
              <button
                onClick={handleLogout}
                className="font-semibold text-lg flex items-center gap-1">
                <TbLogout2 />
                Logout
              </button>
            </li>
          )}
        </ul>

        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col md:hidden items-center gap-6">
                {isAuthenticated && user ? (
                  <li>
                    <Link
                      to="/dashboard"
                      className="font-semibold text-lg flex items-center gap-1">
                      <span>
                        <RxDashboard />
                      </span>
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="/login"
                      className="font-semibold text-lg flex items-center gap-1">
                      <FaRegCircleUser />
                      Login
                    </Link>
                  </li>
                )}
                {isAuthenticated && user && (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="font-semibold text-lg flex items-center gap-1">
                      <TbLogout2 />
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { PiPlantBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaRegCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reduxState/store";
import { logout } from "../reduxState/authSlice/authSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineDashboardCustomize } from "react-icons/md";

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
            <li className="cursor-pointer w-[5rem]">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <img
                    src={user.imageLink}
                    alt={user.fullname}
                    className="h-[3rem] w-[3rem] object-cover rounded-full"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <div className="flex items-center gap-2">
                      <FaRegCircleUser />
                      {user.fullname}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    {" "}
                    <Link
                      to="/dashboard"
                      className="font-semibold flex items-center gap-1">
                      <span>
                        <MdOutlineDashboardCustomize />
                      </span>
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button
                      onClick={handleLogout}
                      className="font-semibold flex items-center gap-1">
                      <TbLogout2 />
                      Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
        </ul>

        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu />
            </SheetTrigger>
            <SheetContent>
              <ul className="md:hidden gap-6">
                {isAuthenticated && user && (
                  <li className="flex items-center gap-2 mb-4 border-b pb-2">
                    <img
                      src={user.imageLink}
                      alt={user.fullname}
                      className="h-[2.5rem] w-[2.5rem] object-cover rounded-full"
                    />
                    <span className="font-semibold text-lg">{user.fullname}</span>
                  </li>
                )}
                {isAuthenticated && user ? (
                  <li className="mb-4">
                    <Link
                      to="/dashboard"
                      className="font-semibold flex items-center gap-1">
                      <span>
                        <MdOutlineDashboardCustomize />
                      </span>
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="/login"
                      className="font-semibold flex items-center gap-1">
                      <FaRegCircleUser />
                      Login
                    </Link>
                  </li>
                )}
                {isAuthenticated && user && (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="font-semibold flex items-center gap-1">
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

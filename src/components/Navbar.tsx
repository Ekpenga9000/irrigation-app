import { Link } from "react-router-dom";
import { PiPlantBold } from "react-icons/pi";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { LuLogIn } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
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
          <li>
            <Link
              to="/login"
              className="font-semibold text-lg flex items-center gap-1">
              <LuLogIn />
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-semibold text-lg flex items-center gap-1">
              <TbLogout2 />
              Logout
            </Link>
          </li>
        </ul>

        <div className="block md:hidden">
          <RxHamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

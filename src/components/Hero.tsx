import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/reduxState/store";

const Hero = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <div className="h-screen flex justify-center items-center screen-padding">
      <div className="text-center lg:w-[50%]">
        <h1 className="text-4xl md:text-7xl font-bold mb-8">
          Smart Irrigation Management
        </h1>
        <p className="text-lg mb-8">
          Optimize water usage and boost crop health with real-time insights and
          automated irrigation control.
        </p>
        {!isAuthenticated ? (
          <Link
            to={"/login"}
            className="bg-orange-400 text-lg py-4 px-8 rounded-md font-semibold">
            Get Started
          </Link>
        ) : (
          <Link
            to={"/dashboard"}
            className="bg-orange-400 text-lg py-4 px-8 rounded-md font-semibold">
            View Dashboard
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;

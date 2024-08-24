import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center screen-padding">
      <div className="text-center lg:w-[50%]">
        <h1 className="text-4xl md:text-7xl font-bold mb-8">Smart Irrigation Management</h1>
        <p className="text-lg mb-8">
          Optimize water usage and boost crop health with real-time insights and
          automated irrigation control.
        </p>
        <Link
          to={"/login"}
          className="bg-orange-400 text-lg py-4 px-8 rounded-md font-semibold">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;

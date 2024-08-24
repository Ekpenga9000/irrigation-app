import { GrGrow } from "react-icons/gr";
import { IoHardwareChipOutline } from "react-icons/io5";
import { PiFarmLight } from "react-icons/pi";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:p-24 md:p-8 p-4 max-md:gap-8 gap-4">
      <div className="lg:w-[50%] text-center lg:text-left">
        <h3 className="text-4xl font-bold mb-4">About Smart Irrigation App</h3>
        <p className="text-lg">
          Smart Irrigation Dashboard is a cutting-edge solution designed to
          empower farmers and agricultural professionals to optimize water usage
          and enhance crop health. Our cloud-based platform offers real-time
          monitoring, automated scheduling, and advanced analytics to ensure
          your irrigation system operates efficiently and effectively. With a
          user-friendly interface and customizable features, you can easily
          manage your irrigation system from anywhere, on any device. Our
          mission is to help you make informed decisions about water management,
          reduce environmental impact, and support sustainable, thriving
          agriculture.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full lg:w-[50%] relative">
        <div className="flex justify-center items-center mb-4">
          <div className="text-4xl md:text-7xl bg-orange-400 p-4 md:p-8 rounded-full md:h-[8rem] md:w-[8-rem]">
            <IoHardwareChipOutline />
          </div>
        </div>

        <div className="flex justify-center items-center mb-4">
          <div className="text-4xl md:text-7xl bg-orange-400 p-4 md:p-8 rounded-full md:h-[8rem] md:w-[8-rem]">
            <GrGrow />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-4xl md:text-7xl bg-orange-400 p-4 md:p-8 rounded-full md:h-[8rem] md:w-[8-rem]">
            <PiFarmLight />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-4xl md:text-7xl bg-orange-400 p-4 md:p-8 rounded-full md:h-[8rem] md:w-[8-rem]">
            <FaHandHoldingWater />
          </div>
        </div>
        <div className="flex justify-center items-center absolute md:left-[40%] md:top-[30%] left-[40%] top-[27%]">
          <div className="text-4xl md:text-7xl bg-orange-400 p-4 md:p-8 rounded-full md:h-[8rem] md:w-[8-rem]">
            <GiFarmer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

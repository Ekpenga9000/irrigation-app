import DashboardCard1 from "@/components/DashboardCard1";
import DashboardHead from "@/components/DashboardHead";
import DashboardSprinklerCard from "@/components/DashboardSprinklerCard";
import ScheduleIrrigationCard from "@/components/ScheduleIrrigationCard";
import { BsWater } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
// import TankLevels from "@/components/TankLevels";

const Dashboard = () => {
  return (
    <section className="p-4">
      <DashboardHead />
      <div className="flex flex-col gap-4 mt-4 border lg:min-h-screen">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[20%] gap-4">
          <li>
            <DashboardCard1 title={"Total water consumption"} data="400.5L" 
              time="10:15am"
              Icon={BsWater}
              chart={1}
            />
          </li>
          <li>
            <DashboardCard1 title={"Tank Levels"} data="35%" 
              Icon={IoWaterOutline}
              chart={2}
            />
          </li>
          <li><DashboardSprinklerCard active={120} inactive={70}/></li>

          <li><ScheduleIrrigationCard/></li>
        </ul>
        <ul className="border h-[35%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>Sensor Overview</li>
          <li>Weather forecast</li>
          <li>sprinklers</li>
        </ul>
        <ul className="border h-[45%] grid grid-cols-1 md:grid-cols-2">
          <li>Land Img</li>
          <li>Schedule</li>
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;

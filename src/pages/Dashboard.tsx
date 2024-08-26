import DashboardCard1 from "@/components/DashboardCard1";
import DashboardHead from "@/components/DashboardHead";
import DashboardSprinklerCard from "@/components/DashboardSprinklerCard";
import ScheduleComponent from "@/components/ScheduleComponent";
import ScheduleIrrigationCard from "@/components/ScheduleIrrigationCard";
import SensorOverviewComponent from "@/components/SensorOverviewComponent";
import WeatherForest from "@/components/WeatherForest";
import { BsWater } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <section className="p-4">
      <DashboardHead />
      <div className="flex flex-col gap-4 mt-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[20%] gap-4">
          <li>
            <DashboardCard1
              title={"Total water consumption"}
              data="400.5L"
              time="10:15am"
              Icon={BsWater}
              chart={1}
            />
          </li>
          <li>
            <DashboardCard1
              title={"Tank Levels"}
              data="35%"
              Icon={IoWaterOutline}
              chart={2}
            />
          </li>
          <li>
            <DashboardSprinklerCard active={120} inactive={70} />
          </li>
          <li>
            <ScheduleIrrigationCard />
          </li>
        </ul>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li>
            <SensorOverviewComponent />
          </li>
          <li><WeatherForest/></li>
          <li>
            <ScheduleComponent />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;

import DashboardCard1 from "@/components/DashboardCard1";
import DashboardHead from "@/components/DashboardHead";
import DashboardSprinklerCard from "@/components/DashboardSprinklerCard";
import ScheduleComponent from "@/components/ScheduleComponent";
import ScheduleIrrigationCard from "@/components/ScheduleIrrigationCard";
import SensorOverviewComponent from "@/components/SensorOverviewComponent";
import WeatherForest from "@/components/WeatherForest";
import ChatComponent from "@/components/ChatComponent";
import { BsWater } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@/reduxState/store";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Link to="/login" className="text-4xl border-4 p-4 rounded-md shadow-md">
          Please click here to login
        </Link>
      </div>
    );
  }
  return (
    <section className="p-4 relative">
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
          <li>
            <WeatherForest />
          </li>
          <li>
            <ScheduleComponent />
          </li>
        </ul>
      </div>
      <ChatComponent />
    </section>
  );
};

export default Dashboard;

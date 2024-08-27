import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reduxState/store";
import { Link } from "react-router-dom";
import {
  updateWaterLevel,
  updateWaterConsumption,
} from "../reduxState/irrigationSlice/irrigationSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { isIrrigationOn, waterConsumption, waterLevel } = useSelector(
    (state: RootState) => state.irrigation
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isIrrigationOn) {
      interval = setInterval(() => {
        dispatch(updateWaterLevel());
        dispatch(updateWaterConsumption(waterConsumption + 0.1));
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [waterConsumption, waterLevel]);
  if (!isAuthenticated) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Link
          to="/login"
          className="text-4xl border-4 p-4 rounded-md shadow-md">
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
              data={`${waterConsumption}L`}
              time={true}
              Icon={BsWater}
              chart={1}
            />
          </li>
          <li>
            <DashboardCard1
              title={"Tank Levels"}
              data={`${waterLevel}%`}
              Icon={IoWaterOutline}
              chart={2}
              time={false}
            />
          </li>
          <li>
            <DashboardSprinklerCard />
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

import React from "react";
import DashboardLineChart from "./DashboardLineChart";
import DashboardGaugeChart from "./DashboardGaugeChart";
import { getTime } from "@/lib/utils";

interface IDashboardCard1Props {
  Icon: React.ElementType;
  title: string;
  data: string;
  time?: string;
  chart: 1 | 2;
}

const date = new Date(); 
const DashboardCard1 = ({
  Icon,
  title,
  data,
  time,
  chart,
}: IDashboardCard1Props) => {
  return (
    <div className="card">
      <div className={`flex items-center gap-2`}>
        <div className="text-orange-400 bg-gray-100 p-2 rounded-full">
          <Icon />
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className={`grid grid-cols-2 items-center`}>
        <ul>
          <li className="text-4xl text-teal-700">{data}</li>
          {time && <li>at {getTime(date.getTime())}</li>}
        </ul>
        <div>
          {chart === 1 && <DashboardLineChart />}

          {chart === 2 && <DashboardGaugeChart />}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard1;

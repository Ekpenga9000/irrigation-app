import React from "react";
import { Progress } from "@/components/ui/progress";
import DashboardLineChart from "./DashboardLineChart";



interface IDashboardCard1Props {
  Icon: React.ElementType;
  title: string;
  data: string;
  time?: string;
  chart: 1 | 2;
}

const DashboardCard1 = ({
  Icon,
  title,
  data,
  time,
  chart,
}: IDashboardCard1Props) => {
  return (
    <div className="card">
      <div className={`flex items-center gap-2 ${chart === 2 ? "mb-4" : ""}`}>
        <div className="text-orange-400 bg-gray-100 p-2 rounded-full">
          <Icon />
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className={`grid grid-cols-2 items-center`}>
        <ul>
          <li className="text-4xl text-teal-700">{data}</li>
          {time && <li>at {time}</li>}
        </ul>
        <div>
          {chart === 1 && (
            <DashboardLineChart/>
          )}

          {chart === 2 && (
               <Progress value={35} className="w-[100%] fill-orange-400" />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard1;

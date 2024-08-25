import { TbFountain } from "react-icons/tb";

interface IDashboardSprinklerCardProps{
    active:number; 
    inactive:number; 
}
const DashboardSprinklerCard = ({active, inactive}: IDashboardSprinklerCardProps) => {
  return (
    <div className="card">
      <ul className="flex items-center gap-2">
        <li className="text-orange-400 bg-gray-100 p-2 rounded-full">
          <TbFountain />
        </li>
        <li className="font-semibold">Sprinkler System</li>
      </ul>
      <div className="flex items-center justify-between">
        <ul>
          <li>
            <p className="text-teal-700 text-2xl">{`${active}`}</p>
            <p className="text-sm">Active Sprinklers</p>
          </li>
          <li>
            <p className="text-gray-500 text-2xl">{`${inactive}`}</p>
            <p className="text-sm">Inactive Sprinklers</p>
          </li>
        </ul>
        <ul>
          <li className="text-4xl text-teal-700">{`${active + inactive}`}</li>
          <li>Total Sprinklers</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSprinklerCard;

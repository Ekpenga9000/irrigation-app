import { Gauge } from "@mui/x-charts/Gauge";

interface ISensorOverviewCardProp {
  data: number;
  text: string;
}
const SensorOverviewCard = ({ data, text }: ISensorOverviewCardProp) => {
  return (
    <div className="flex flex-col items-center">
      <Gauge
        width={100}
        height={100}
        value={data}
        startAngle={-100}
        endAngle={100}
      />
      <p className="mt-[-1rem] text-sm">{text}</p>
    </div>
  );
};

export default SensorOverviewCard;

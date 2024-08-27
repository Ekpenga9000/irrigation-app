import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { useSelector } from "react-redux";
import { RootState } from "@/reduxState/store";



const DashboardGaugeChartPointer = () => {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();
  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
  return <div>DashboardGaugeChart</div>;
};

const DashboardGaugeChart = () => {
  const { waterLevel } = useSelector((state: RootState) => state.irrigation);
  return (
    <GaugeContainer
      width={150}
      height={80}
      startAngle={-110}
      endAngle={110}
      value={waterLevel}>
      <GaugeReferenceArc />
      <GaugeValueArc />
      <DashboardGaugeChartPointer />
    </GaugeContainer>
  );
};

export default DashboardGaugeChart;

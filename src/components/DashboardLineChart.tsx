import { Line, LineChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", waterConsumption: 186 },
  { month: "February", waterConsumption: 305 },
  { month: "March", waterConsumption: 237 },
  { month: "April", waterConsumption: 73 },
  { month: "May", waterConsumption: 209 },
  { month: "June", waterConsumption: 214 },
];

const chartConfig = {
  waterConsumption: {
    label: "Consumption",
    color: "#fb923c",
  },
  activities: {
    label: "Activities",
  },
  running: {
    label: "Running",
    color: "hsl(var(--chart-1))",
  },
  swimming: {
    label: "Swimming",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const DashboardLineChart = () => {
  return(
    <ChartContainer config={chartConfig} className="max-h-[50%] w-full">
    <LineChart accessibilityLayer data={chartData}>
      <Line
        dataKey="waterConsumption"
        type="natural"
        stroke="var(--color-waterConsumption)"
        strokeWidth={2}
        dot={false}
      />
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel />}
      />
    </LineChart>
  </ChartContainer>
  );
};

export default DashboardLineChart;

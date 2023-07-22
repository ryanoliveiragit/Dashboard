import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { PieChartContainer } from "../styles";

const COLORS = ["#497AF9", "#789DFB", "#E5E5E5"];

const data = [
  { name: "New", value: 62 },
  { name: "Returning", value: 13 },
  { name: "Inactive", value: 23 },
];

export const PieGraphic = () => {
  const onPieEnter = (data: any, index: any) => {
    console.log("Mouse entered the PieChart!", data, index);
  };

  return (
    <PieChartContainer>
      <ul>
        <li>
          <div className="blue">.</div>
          62% New
        </li>
        <li>
          <div className="blueLight">.</div>
          13% Returning
        </li>
        <li>
          <div className="gray">.</div>
          23% Inactive
        </li>
      </ul>
      <PieChart width={185} height={186} onMouseEnter={onPieEnter}>
        <Tooltip />
        <Pie
          data={data}
          innerRadius={40}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </PieChartContainer>
  );
};

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ButtonSales,
  ContainerVerticalComposed,
  TableCell,
  TableContainer,
  TableRow,
} from "../styles";

const data = [
  {
    id: 1,
    name: "Home Decor Range",
    uv: 590,
    pv: 35,
    amt: 1400,
  },
  {
    id: 2,
    name: "Disney Princess Pink Bag 18",
    uv: 868,
    pv: 96,
    amt: 1506,
  },
  {
    id: 3,
    name: "Bathroom Essentials",
    uv: 1397,
    pv: 10,
    amt: 989,
  },
  {
    id: 4,
    name: "Apple Smartwatches",
    uv: 1480,
    pv: 20,
    amt: 1228,
  },
];

export const VerticalComposed = () => {
  return (
    <ContainerVerticalComposed>
      <TableContainer>
        <h1>Top products</h1>
        <TableRow className="header">
          <TableCell className="id">
            <ul>
              <li>#</li>
            </ul>
          </TableCell>
          <TableCell className="name">
            <ul>
              <li>Name</li>
            </ul>
          </TableCell>
          <TableCell className="data">
            <ul>
              <li>Popularity</li>
            </ul>
          </TableCell>
          <TableCell className="sales">
            <ul>
              <li>Sales</li>
            </ul>
          </TableCell>
        </TableRow>
        <div>
          <TableRow>
            <TableCell className="id tbody">
              {data.map((item) => {
                return (
                  <>
                    <ul className="mapList">
                      <li>0{item.id}</li>
                    </ul>
                  </>
                );
              })}
            </TableCell>
            <TableCell className="name">
              {data.map((item) => {
                return (
                  <>
                    <ul className="mapList">
                      <li>{item.name}</li>
                    </ul>
                  </>
                );
              })}
            </TableCell>
            <TableCell className="data">
              <ResponsiveContainer>
                <ComposedChart
                  layout="vertical"
                  data={data}
                  margin={{
                    top: -20,
                    right: 140,
                    bottom: -49,
                    left: -15,
                  }}
                >
                  <Tooltip />
                  <YAxis
                    dataKey="name"
                    type="category"
                    scale="band"
                    className="transparent"
                  />
                  <XAxis type="number" className="transparent" />
                  <Bar
                    dataKey="pv"
                    barSize={5}
                    fill="#884DFF"
                    background={{ fill: "#C5A8FF" }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </TableCell>
            <TableCell className="sales">
              {data.map((item) => {
                return (
                  <>
                    <ul className="mapList">
                      <li>
                        <ButtonSales>{item.pv}%</ButtonSales>
                      </li>
                    </ul>
                  </>
                );
              })}
            </TableCell>
          </TableRow>
        </div>
      </TableContainer>
    </ContainerVerticalComposed>
  );
};

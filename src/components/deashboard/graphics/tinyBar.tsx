import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
import { TinyBarContainer, Logo, ContainerAll, TotalTinyBar } from "../styles";
import { RealityLogo, TargetLogo } from "../../../utils/logo";

const data = [
  {
    name: "Page A",
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page V",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const TinyBar = () => {
  return (
    <ContainerAll>
      <TinyBarContainer>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Tooltip />
            <Bar dataKey="uv" fill="#4AB58E" />
            <Bar dataKey="amt" fill="#FFCF00" />
          </BarChart>
        </ResponsiveContainer>
      </TinyBarContainer>
      <ul>
        <li className="Jan">Jan</li>
        <li className="Feb">Feb</li>
        <li className="Mar">Mar</li>
        <li className="Apr">Apr</li>
        <li className="May">May</li>
        <li className="June">June</li>
        <li className="July">July</li>
        <li className="Ago">Ago</li>
      </ul>
      <TotalTinyBar>
        <section>
          <Logo>
            <RealityLogo/>
            <div>
              <h1>Reality Sales</h1>
              <p>Global</p>
            </div>
          </Logo>
          <span className="green">8.823</span>
        </section>
        <section>
          <Logo className="fixed">
            <TargetLogo />
            <div>
              <h1>Target Sales</h1>
              <p>Commercial</p>
            </div>
          </Logo>
          <span className="yellow">12.122</span>
        </section>
      </TotalTinyBar>
    </ContainerAll>
  );
};

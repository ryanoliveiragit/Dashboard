import React from "react";
import { BsBell } from "react-icons/bs";
import { BiExport } from "react-icons/bi";
import sold from "../../assets/sold.svg";
import totalOrder from "../../assets/totalOrder.svg";
import totalSales from "../../assets/totalSales.svg";

import {
  ContainerDashboard,
  Profile,
  Icon,
  Header,
  Container,
  GridContainer,
  GridItem,
  TodaysSales,
  ContainerSales,
  Users,
  PieChartContainer, // Adicione o novo contêiner
} from "./styles";
import { PieChart, Pie, Cell } from "recharts";

export const Dashboard = () => {
  const COLORS = ["#497AF9", "#789DFB", "#E5E5E5"];
  const data = [
    { name: "New", value: 62 },
    { name: "Returning", value: 13 },
    { name: "Inactive", value: 23 },
  ];

  // Define the onMouseEnter event handler for the PieChart component
  const onPieEnter = (data: any, index: any) => {
    // Your logic for handling the onMouseEnter event goes here
    console.log("Mouse entered the PieChart!", data, index);
  };

  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>
        <Profile>
          <Icon>
            <BsBell size="24px" />
          </Icon>
          <div>
            <span>user</span>
            <p>Admin</p>
          </div>
        </Profile>
      </Header>
      <ContainerDashboard>
        <GridContainer>
          {/* Primeira coluna */}
          <GridItem className="today">
            <TodaysSales>
              <header>
                <div>
                  <h1>Today’s Sales</h1>
                  <h2>Sales Summary</h2>
                </div>
                <button>
                  <BiExport size="16px" />
                  Export
                </button>
              </header>
              <ContainerSales>
                <div className="red">
                  <img src={totalSales} alt="icon totalSales" />
                  <h1>300</h1>
                  <span>Total Order</span>
                  <p>+5% from yesterday</p>
                </div>
                <div className="yellow">
                  <img src={totalOrder} alt="icon totalOrder" />
                  <h1>5</h1>
                  <span>Product Sold</span>
                  <p>+1.2% from yesterday</p>
                </div>
                <div className="green">
                  <img src={sold} alt="icon sold" />
                  <h1>$1k</h1>
                  <span>Total Sales</span>
                  <p>+8% from yesterday</p>
                </div>
              </ContainerSales>
            </TodaysSales>
          </GridItem>
          <GridItem className="pie">
            <Users>
            <header>
                <h1>Users</h1>
                <h2>4.209</h2>
              </header>
              </Users>
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
                  <Pie
                    data={data}
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </PieChartContainer>
          </GridItem>

          {/* Segunda coluna */}
          <GridItem>Item 3</GridItem>
          <GridItem>Item 4</GridItem>

          {/* Terceira coluna */}
          <GridItem>Item 5</GridItem>
        </GridContainer>
      </ContainerDashboard>
    </Container>
  );
};

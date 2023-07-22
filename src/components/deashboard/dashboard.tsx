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
  VerticalContainer,
} from "./styles";
import { PieGraphic } from "./graphics/pie";
import { TinyBar } from "./graphics/tinyBar";
import { AreaGraph } from "./graphics/area";
import { VerticalComposed } from "./graphics/verticalComposed";

export const Dashboard = () => {
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
            <PieGraphic />
          </GridItem>
          <GridItem>
            <TinyBar />
          </GridItem>
          <GridItem>
            <AreaGraph />
          </GridItem>
        </GridContainer>
        <VerticalContainer>
          <VerticalComposed />
        </VerticalContainer>
      </ContainerDashboard>
    </Container>
  );
};

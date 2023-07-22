import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100%;
  margin-left: 20rem;
`;
export const ContainerDashboard = styled.div`
  width: 100%;
  padding: 0rem 1.8rem;
`;
export const Header = styled.header`
  h1 {
    color: ${(props) => props.theme.grey900};
    font-weight: 500;
    line-height: 140%;
    font-size: 2.25rem;
  }
  height: 7.5rem;
  display: flex;
  padding: 0rem 1.875rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};
  align-items: center;
`;
export const Profile = styled.div`
  width: 10rem;
  color: black;
  display: flex;
  gap: 1rem;
  span {
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    color: ${(props) => props.theme.grey700};
    font-size: 0.87rem;
    line-height: 20px;
    font-weight: 400;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
export const Icon = styled.div`
  background-color: ${(props) => props.theme.yellowFade};
  padding: 12px;
  border-radius: 8px;
  svg {
    fill: ${(props) => props.theme["yellow100:"]};
  }
`;

export const GridContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;

  @media (max-width: 1285px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr; 
  }
`;
export const VerticalContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.white};
  border: 1px solid #f8f9fa;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgba(238, 238, 238, 0.5);
`;
export const GridItem = styled.div`
  background-color: ${(props) => props.theme.white};
  border: 1px solid #f8f9fa;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgba(238, 238, 238, 0.5);
`;

export const TodaysSales = styled.section`
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      color: ${(props) => props.theme.grey250};
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 5.5rem;
      height: 2.5rem;
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 20px;
      border-radius: 8px;
      border: 1px solid #c3d3e2;
      background: #fff;
    }
  }
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 43px;
  padding: 1.4rem 2rem;
  h1 {
    color: ${(props) => props.theme.grey900};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.grey700};
  }
  .red {
    background-color: ${(props) => props.theme.red50};
  }
  .green {
    background-color: ${(props) => props.theme.green50};
  }
  .yellow {
    background-color: ${(props) => props.theme.yellow50};
  }
`;
export const PieChartContainer = styled.div`
  display: flex;
  padding: 0rem 1rem;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  ul {
    width: 10rem;
    margin-left: 23px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    list-style: none;
    li {
      color: ${(props) => props.theme.grey700};
      font-size: 0.85rem;
      display: flex;
      gap: 7px;
      display: flex;
      align-items: center;
      text-align: center;
    }
    div {
      color: transparent;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }
  .blue {
    width: 19.178px;
    height: 12.649px;
    background-color: black;
    border-radius: 2.683px;
    background: #497af9;
  }
  .blueLight {
    width: 19.178px;
    height: 12.649px;
    background-color: black;
    border-radius: 2.683px;
    background: #789dfb;
  }
  .gray {
    width: 19.178px;
    height: 12.649px;
    background-color: black;
    border-radius: 2.683px;
    background: #e5e5e5;
  }
`;
export const ContainerSales = styled.div`
  display: flex;
  gap: 1.9rem;
  div {
    padding: 2rem;
    border-radius: 16px;
    width: 100%;
    padding: 1.25rem;
    gap: 8px;
    background-color: blue;
    @media (max-width: 1550px) {
    width: 6rem;
  }
  }
  img {
    width: 40px;
    margin-bottom: 8px;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 32px;
    @media (max-width: 1550px) {
        font-size: 1rem;
    }
  }
  span {
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    color: ${(props) => props.theme["grey200"]};
    @media (max-width: 1550px) {
        font-size: .75rem;
    }
  }
  p {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 15px;
    color: ${(props) => props.theme["blue50"]};
    @media (max-width: 1550px) {
        font-size: .60rem;
    }
  }
`;

export const Users = styled.div`
  padding: 1rem 2rem;
  header {
    h1 {
      color: ${(props) => props.theme.grey900};
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      font-size: 1.25rem;
    }
    h2 {
      color: ${(props) => props.theme.grey850};
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      font-size: 0.85rem;
    }
  }
`;

export const TinyBarContainer = styled.section`
  width: 30%;
  ul {
    z-index: 2;
    list-style-type: none;
    padding: 1rem;
    background-color: ${(props) => props.theme.white};
    display: flex;
    background-color: white;
  }
  width: 100%;
  height: 25rem;
`;

export const ContainerAll = styled.div`
  ul {
    padding: 1rem 0rem;
    width: 100%;
    justify-content: space-between;

    align-items: center;
    list-style-type: none;
    display: flex;
    position: relative;
    li {
      position: absolute;
      font-size: 0.6rem;
      color: ${(props) => props.theme.grey100};
      margin: 0rem 2rem;
    }
    .Jan {
      margin-left: 3rem;
      text-align: center;
    }
    .Feb {
      left: 15%;
    }
    .Mar {
      left: 27%;
    }
    .Apr {
      left: 39%;
    }
    .May {
      left: 51%;
    }
    .June {
      left: 64%;
    }
    .July {
      left: 76%;
    }
    .Ago {
      left: 89%;
    }
  }
`;

export const TotalTinyBar = styled.section`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 17px;
  section {
    width: 50%;
    display: flex;
    gap: 2rem;
    flex-direction: row;
    justify-content: space-between;
    span {
      font-weight: 500;
      line-height: 20px;
      font-size: 14px;
    }
    .green {
      color: #27ae60;
    }
    .yellow {
      color: #ffa412;
    }
    div {
      h1 {
        color: ${(props) => props.theme.grey900};
        font-size: 12px;
      }
      p {
        color: ${(props) => props.theme.grey700};
        font-size: 10px;
      }
    }
    .fixed {
      gap: 35px;
    }
  }
`;
export const Logo = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
`;
export const ContainerArea = styled.div`
  hr {
    opacity: 0.2;
    margin-top: 6rem;
  }
  width: 100%;
  height: 100%;
  padding: 1rem;
  h1 {
    font-size: 20px;
    padding: 1rem;
    padding-bottom: 2rem;
    font-weight: 600;
    line-height: 32px;
    color: ${(props) => props.theme.grey900};
  }
  section {
    padding-top: 3rem;
    justify-content: center;
    display: flex;
    gap: 2rem;
  }
`;
export const ContainerIcons = styled.div`
  .fisrt {
    padding-right: 3rem;
    border-right: 1px solid #bdc9d3;
    height: 50%;
  }
  display: flex;
  align-items: baseline;
  flex-direction: row;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
    h1 {
      color: #96a5b8;
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
    }
  }
`;

export const TableContainer = styled.div`
  border-collapse: collapse;
  margin: 1rem;
  .header {
    color: #96a5b8;
    padding: 2rem 0rem;
    margin-bottom: 1rem;
    height: 1rem;
    border-bottom: 1px solid #edf2f6;
  }
`;
export const ContainerVerticalComposed = styled.div`
  width: 100%;
`;
export const TableRow = styled.div`
  .id {
    width: 20%;
  }
  .name {
    width: 40%;
  }
  .data {
    width: 100%;
  }
  .sales {
    width: 17%;
  }
  display: flex;
  height: 100%;
  padding: 0.5rem;
`;

export const TableCell = styled.div`
  width: 100%;
  @media (max-width: 1550px) {
    gap: 1.5rem;
  }
  .transparent {
    display: none;
  }
  ul {
    width: 100%;
    padding-left: 3rem;
    list-style: none;
    justify-content: space-between;
    li {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    @media (max-width: 1550px) {
      li {
      font-size: 10px;
    }
  }
  }
  width: 100%;
  align-items: center;
  gap: 2.2rem;
  text-align: start;
  justify-content: center;
  display: flex;
  flex-direction: column;

`;
export const ButtonSales = styled.button`
  width: 86.589px;
  height: 1.5rem;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #884dff;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #884dff;
  background: var(--supporting-color-violet-shade, #fbf1ff);
`;

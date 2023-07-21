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
  }
  img {
    width: 40px;
    margin-bottom: 8px;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 32px;
  }
  span {
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    color: ${(props) => props.theme["grey200"]};
  }
  p {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 15px;
    color: ${(props) => props.theme["blue50"]};
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
      font-size: .85rem;
    }
  }
`;

export const TinyBarContainer = styled.section`
    ul {
        display: flex;
        background-color: white;
    }
    width: 100%;
    height: 25rem;`

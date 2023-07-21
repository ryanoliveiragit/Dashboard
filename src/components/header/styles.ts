import { styled } from "styled-components";

export const ContainerHeader = styled.header`
  background-color: ${(props) => props.theme.grey300};
  padding: 3rem 2rem;
  height: 100vh;
  width: 20.5rem;
  h1 {
    color: ${(props) => props.theme.grey900};
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  ul {
    svg {
      fill: ${(props) => props.theme.grey700};
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  li {
    color: ${(props) => props.theme.grey700};;
    font-weight: 400;
    display: flex;
    width: 252px;
    padding: 0.75rem 1.25rem;
    align-items: center;
    gap: 24px;
    flex-shrink: 0;

    font-size: 14px;
    line-height: normal;
  }
  .select {
    svg {
      fill: ${(props) => props.theme.white};
    }
    padding: 1rem 1.25rem;
    color: ${(props) => props.theme.white};;
    font-weight: 600;
    border-radius: 16px;
    background-color: ${(props) => props.theme.purple};
    box-shadow: 0px 20px 50px 0px rgba(55, 69, 87, 0.1);
  }
  button {
    color: ${(props) => props.theme.red100};;;
    margin-left: 2rem;
    margin-top: 2rem;
    font-size: 18px;
    display: flex;
    align-items: center;
    border: none;
    gap: 1.5rem;
    background-color: transparent;
    cursor: pointer;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

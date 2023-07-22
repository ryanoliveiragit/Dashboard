import { styled } from "styled-components";

export const ContainerHeader = styled.header`
  background-color: ${(props) => props.theme.grey300};
  padding: 3rem 2rem;
  position: fixed;
  height: 100%;
  width: 20.5rem;
  @media (max-width: 1550px) {
    width: 15.5rem;
    svg {
      max-width: 15px;
    }
  }
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
    @media (max-width: 1550px) {
      gap: .2rem;
      li {
        font-size: .5rem;
      }
  }
  }
  li {
    color: ${(props) => props.theme.grey700};;
    font-weight: 400;
    display: flex;
    padding: 0.75rem 1.25rem;
    align-items: center;
    gap: 24px;
    flex-shrink: 0;
    font-size: .85rem;
    line-height: normal;
    @media (max-width: 1550px) {
      padding: 1rem 1.25rem;
  }
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
    @media (max-width: 1550px) {
      padding: .5rem 1.25rem;
  }
  }
  button {
    color: ${(props) => props.theme.red100};;;
    margin-left: 1.1rem;
    margin-top: 2rem;
    font-size: 18px;
    display: flex;
    align-items: center;
    border: none;
    gap: 1.5rem;
    background-color: transparent;
    cursor: pointer;
    @media (max-width: 1550px) {
      font-size: .5rem;
  }
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

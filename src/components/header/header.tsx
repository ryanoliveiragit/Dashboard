import { AiFillDashboard } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { BsGraphDown } from "react-icons/bs";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { ContainerHeader, LogoContainer } from "./styles";
import {GoSignOut} from 'react-icons/go'
import { Logo } from "../../utils/logo";

export const Header = () => {
  return (
    <ContainerHeader>
      <nav>
        <ul>
        <LogoContainer>
            <Logo />
            <h1>Site</h1>
        </LogoContainer>
          <li className="select">
            <AiFillDashboard size="24px" /> Dashboard
          </li>
          <li>
            <MdLeaderboard size="24px" /> Leaderboard
          </li>
          <li>
            <AiOutlineShoppingCart size="24px" /> Order
          </li>
          <li>
            <CgShoppingBag size="24px" /> Products
          </li>
          <li>
            <BsGraphDown size="24px" /> Sales Report
          </li>
          <li>
            <LiaCommentDotsSolid size="24px" /> Sales Report
          </li>
          <li>
            <CiSettings size="26px" /> Settings
          </li>
        </ul>
        <button><GoSignOut size="24px" /> Sign Out</button>
      </nav>
    </ContainerHeader>
  );
};

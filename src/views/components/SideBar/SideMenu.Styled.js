import styled from "styled-components";
import {Link} from "react-router-dom";

export const SideMenu = styled(Link)`
  display: flex;
  font-size: 20px;
  height: 40px;
  align-items: center;
  color: #606060;
  padding: 0 24px;
  cursor: pointer;

  p {
    margin-left: 24px;
    font-size: 14px;
    color: #000;
  }

  &:hover {
    background-color: #f1f1f1;
  }

  &.isActive {
    background-color: #e5e5e5;
    color: red;
  }

`;
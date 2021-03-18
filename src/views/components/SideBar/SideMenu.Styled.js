import styled, {css} from "styled-components";

export const SideMenu = styled.div`
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

  ${(props) => props.className === "isActive" && css`
    display: flex;
    font-size: 20px;
    height: 40px;
    align-items: center;
    padding: 0 24px;
    background-color: #e5e5e5;
    color: red;
  `}

  ${(props) => props.shape === "onBtn" && css`
    display: flex;
    flex-direction: column;
    height: 74px;
    width: 80px;
    padding: 16px 0 14px;

    p {
      font-size: 10px;
      margin: 10px 0 0 0;
    }

    &.isActive {
      p {
        color: red;
      }
    }
  `}
`;
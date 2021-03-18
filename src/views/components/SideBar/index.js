import React from "react";
import styled, {css} from "styled-components";
import {useLocation} from "react-router-dom";

import MainMenu from "./MainMenu";
import UserVideoManagement from "./UserVideoManagement";
import YouTubeMore from "./YouTubeMore";
import Settings from "./Settings";
import cn from "classnames";
import {useSelector} from "react-redux";

const SideBar = () => {

    const app = useSelector(state => state.app)

    const location = useLocation()
    return (
        <Container>
            <MainMenu location={location}/>
            <OnBtn className={cn({onBtn: app.btn})}>
                <UserVideoManagement/>
                <YouTubeMore/>
                <Settings/>
            </OnBtn>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  padding: 12px 8px 0 0;
`;

const OnBtn = styled.div`
  ${(props) => props.className === "onBtn" && css`
    display: none;
  `}
`;

export default SideBar;
import React from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

import MainMenu from "./MainMenu";
import UserVideoManagement from "./UserVideoManagement";
import YouTubeMore from "./YouTubeMore";
import Settings from "./Settings";

const SideBar = () => {

    const location = useLocation()

    return (
        <Container>
            <MainMenu location={location}/>
            <UserVideoManagement/>
            <YouTubeMore/>
            <Settings/>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  width: 240px;
  padding: 12px 8px 0 0;
`;

export default SideBar;
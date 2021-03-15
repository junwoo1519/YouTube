import React from "react";
import styled from "styled-components";
import {ImFire, ImHome} from "react-icons/im";
import {MdSubscriptions} from "react-icons/md";
import {AiFillYoutube} from "react-icons/ai";
import {SideMenu} from "./SideMenu.Styled";
import cn from "classnames";

const MainMenu = ({location}) => {

    return (
        <Container>
            <Home to={'/'} className={cn({isActive: location.pathname === '/'})}><ImHome/><p>홈</p></Home>
            <Popularity to={'/feed/trending'}
                        className={cn({isActive: location.pathname === '/feed/trending'})}><ImFire/><p>인기</p>
            </Popularity>
            <Subscribe to={"/feed/subscriptions"}
                       className={cn({isActive: location.pathname === '/feed/subscriptions'})}
            ><MdSubscriptions/><p>구독</p></Subscribe>
            <Originals to={"/channel"}
                       className={cn({isActive: location.pathname === '/channel'})}
            ><AiFillYoutube/><p>Originals</p></Originals>
        </Container>
    )
}

const Container = styled.div`
  border-bottom: 1px solid rgb(229 229 229);
  padding-bottom: 15px;
  margin-bottom: 5px;
`;

const Home = styled(SideMenu)`
`;

const Popularity = styled(SideMenu)`

`;

const Subscribe = styled(SideMenu)`

`;

const Originals = styled(SideMenu)`

`;

export default MainMenu;
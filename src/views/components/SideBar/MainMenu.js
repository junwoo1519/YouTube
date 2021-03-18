import React from "react";
import styled, {css} from "styled-components";
import {ImFire, ImHome} from "react-icons/im";
import {MdSubscriptions} from "react-icons/md";
import {AiFillYoutube} from "react-icons/ai";
import {SideMenu} from "./SideMenu.Styled";
import cn from "classnames";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const MainMenu = ({location}) => {

    const app = useSelector(state => state.app)

    return (
        <Container className={cn({onBtn: app.btn})}>
            <Link to={"/"}>
                <Home className={cn({isActive: location.pathname === '/'})}
                      shape={cn(({onBtn: app.btn}))}
                ><ImHome/><p>홈</p>
                </Home>
            </Link>
            <Link to={"'/feed/trending'"}>
                <Popularity
                    className={cn({isActive: location.pathname === '/feed/trending'})}
                    shape={cn(({onBtn: app.btn}))}><ImFire/>
                    <p>인기</p>
                </Popularity>
            </Link>
            <Link to={"/feed/subscriptions"}>
                <Subscribe className={cn({isActive: location.pathname === '/feed/subscriptions'})}
                           shape={cn(({onBtn: app.btn}))}
                ><MdSubscriptions/><p>구독</p></Subscribe>
            </Link>
            <Link to={"/channel"}>
                <Originals className={cn({isActive: location.pathname === '/channel'})}
                           shape={cn(({onBtn: app.btn}))}
                ><AiFillYoutube/><p>Originals</p></Originals>
            </Link>
        </Container>
    )
}

const Container = styled.div`
  border-bottom: 1px solid rgb(229 229 229);
  padding-bottom: 15px;
  margin-bottom: 5px;
  ${(props) => props.className === "onBtn" && css`
    width: 80px;
    border: none;
  `}
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
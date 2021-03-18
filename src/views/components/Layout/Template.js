import React from "react";
import styled, {css} from "styled-components";
import Header from "../Header";
import SideBar from "../SideBar";
import {useSelector} from "react-redux";
import cn from "classnames";

const Template = ({children}) => {

    const app = useSelector(state => state.app)

    return (
        <Container className={"Template"}
                   shape={cn({onBtn: app.btn})}>
            <Header/>
            <SideBar/>
            <Main>
                {children}
            </Main>
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  padding-top: 56px;
  padding-left: 240px;
  ${(props) => props.shape === "onBtn" && css`
    padding-left: 20px;
  `}
`;

const Main = styled.div`
  background-color: #f9f9f9;
  flex: 1;
`;

export default Template;
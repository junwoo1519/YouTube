import React from "react";
import styled from "styled-components";
import Header from "../Header";
import SideBar from "../SideBar";

const Template = ({children}) => {

    return (
        <Container className={"Template"}>
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
`;

const Main = styled.div`
  background-color: #f9f9f9;
  flex: 1;
`;

export default Template;
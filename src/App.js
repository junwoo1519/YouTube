import React from "react";
import styled from "styled-components";

import Template from "./views/components/Layout/Template";
import Routes from "./views/Routes";
import {GlobalStyled} from "./styled/GlobalStyle";

const App = () => {

    return (
        <Container className={"App"}>
            <GlobalStyled/>
            <Template>
                <Routes/>
            </Template>
        </Container>
    )
}

const Container = styled.div`
`;

export default App;
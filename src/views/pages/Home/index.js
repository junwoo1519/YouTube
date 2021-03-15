import React from "react";
import styled from "styled-components";
import VideoListContainer from "../../containers/VideoListContainer";

const Home = () => {

    return (
        <Container>
            <VideoListContainer/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 12px;
`;

export default Home;
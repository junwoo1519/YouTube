import React from "react";
import styled from "styled-components";
import VideoItem from "../Feed/VideoItem";

const VideoItemList = ({data}) => {

    return (
        <Container>
            <Row>
                {
                    data.map((item, i) => (
                        <Col Key={i}>
                            <VideoItem {...item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Col = styled.div`
  width: 23%;
  padding: 10px;
`;

export default VideoItemList;
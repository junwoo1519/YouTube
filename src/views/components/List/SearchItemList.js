import React from "react";
import styled from "styled-components";
import SearchItem from "../Feed/SearchItem";

const SearchItemList = ({data}) => {

    return (
        <Container>
            <Row>
                {
                    data.map((item, i) => (
                        <Col Key={i}>
                            <SearchItem {...item}/>
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
  width: 80%;
  padding: 10px;
`;

export default SearchItemList;
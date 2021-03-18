import React from "react";
import styled from "styled-components";
import SearchListContainer from "../../containers/SearchListContainer";

const Search = ({match}) => {

    return (
        <Container>
            <SearchListContainer match={match}/>
        </Container>
    )
};

const Container = styled.div`
  margin-top: 12px;
`;

export default Search;
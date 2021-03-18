import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/Search/redux";
import {YOUTUBE_KEY} from "../../constants";
import {useOnViewport} from "../../hooks/useOnViewport";
import SearchItemList from "../components/List/SearchItemList";

const SearchListContainer = ({match}) => {

    const dispatch = useDispatch();
    const {searchList, isLoading} = useSelector(state => state.search);
    const [page, setPage] = useState(1);

    useEffect(function () {
        getSearch()
    }, [page, match.params.query]);

    const getSearch = function () {
        dispatch(Action.Creators.getSearch({
            key: YOUTUBE_KEY,
            part: "snippet",
            chart: "mostPopular",
            maxResults: 20,
            q: `${match.params.query}`,
            pageToken: searchList?.nextPageToken
        }))
    };

    const [SentinelRef, inViewport] = useOnViewport({
        rootMargin: "500px"
    });

    useEffect(() => {
        if (inViewport) setPage(prevPage => prevPage + 1)
    }, [inViewport]);

    return (
        <Container>
            <SearchItemList data={searchList.items}/>
            {
                searchList.items.length > 0 &&
                <Sentinel ref={SentinelRef}/>
            }
            {
                isLoading &&
                <Loading>...isLoading</Loading>
            }
        </Container>
    )
};

const Container = styled.div`

`;

const Sentinel = styled.div`
  height: 5px;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  height: 100px;
`;

export default SearchListContainer;
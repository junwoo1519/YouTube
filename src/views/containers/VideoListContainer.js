import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/videos/redux";
import {YOUTUBE_KEY} from "../../constants";
import VideoItemList from "../components/List/VideoItemList";
import {useOnViewport} from "../../hooks/useOnViewport";

const VideoListContainer = () => {

    const dispatch = useDispatch();
    const {list, isLoading} = useSelector(state => state.videos);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getVideo()
    }, [page])

    const getVideo = () => {
        dispatch(Action.Creators.getVideos({
            key: YOUTUBE_KEY,
            part: "snippet, statistics",
            chart: "mostPopular",
            maxResults: 20,
            regionCode: "KR",
            pageToken: list?.nextPageToken
        }))
    };

    const [SentinelRef, inViewport] = useOnViewport({
        rootMargin: "500px"
    });

    useEffect(() => {
        if (inViewport) setPage(prevPage => prevPage + 1)
    }, [inViewport])

    return (
        <Container>
            <VideoItemList data={list.items}/>
            {
                list.items.length > 0 &&
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

export default VideoListContainer;
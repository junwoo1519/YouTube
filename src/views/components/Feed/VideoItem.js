import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";

import {setViewCount} from "../../../lib/common";

const VideoItem = (props) => {

    const {
        snippet,
        statistics,
        channels
    } = props;

    const viewCount = setViewCount(statistics.viewCount);

    moment.locale("ko");
    const publishedAt = moment(snippet.publishedAt).fromNow();

    return (
        <Container>
            <Thumb>
                <Image>
                    <img src={snippet?.thumbnails?.high.url} alt=""/>
                </Image>
            </Thumb>
            <Desc>
                <Avatar>
                    <img src={channels?.thumbnails?.high.url} alt=""/>
                </Avatar>
                <Detail>
                    <h3>{snippet?.title}</h3>
                    <p>{snippet?.channelTitle}</p>
                    <p>조회수 {viewCount}회 {publishedAt}</p>
                </Detail>
            </Desc>
        </Container>
    )
}

const Container = styled.div`

`;

const Thumb = styled.div`
  position: relative;
  padding-bottom: ${9 / 16 * 99}%;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Avatar = styled.div`
  margin-right: 10px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

const Detail = styled.div`
  flex: 1;

  h3 {
    font-size: 16px;
    color: #030303;
    line-height: 1.4;
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  p {
    color: #606060;
    font-size: 14px;
    line-height: 1.4;
  }
`;

export default VideoItem;
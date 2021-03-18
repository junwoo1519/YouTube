import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";
import {setViewCount} from "../../../lib/common";

const SearchItem = (props) => {

    const {
        snippet,
        channels
    } = props;

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
                <Detail>
                    <h3>{snippet?.title}</h3>
                    <p>조회수 {setViewCount()}회 {publishedAt}</p>
                </Detail>
                <Avatar>
                    <img src={channels?.thumbnails?.default.url} alt=""/>
                    <p>{snippet?.channelTitle}</p>
                </Avatar>
                <Description>
                    <p>{channels?.localized.description}</p>
                </Description>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
`;

const Thumb = styled.div`
  position: relative;
  padding-bottom: ${9 / 16 * 32}%;
  flex: 1;
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
  flex-direction: column;
  flex: 2;
  margin-left: 20px;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 7px;
  }

  p {
    font-size: 13px;
  }
`;

const Detail = styled.div`

  h3 {
    font-size: 16px;
    color: #030303;
    line-height: 1.4;
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    color: #606060;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 10px;
  }
`;

const Description = styled.div`
  p {
    font-size: 13px;
    margin: 0 0 8px;
  }
`;

export default SearchItem;
import React from "react";
import styled from "styled-components";
import {MdLocalMovies} from "react-icons/md";
import {SiYoutubegaming} from "react-icons/si";
import {RiBroadcastLine} from "react-icons/ri";
import {AiFillBulb} from "react-icons/ai";
import {ImTrophy} from "react-icons/im";
import {SideMenu} from "./SideMenu.Styled";

const YouTubeMore = () => {

    return (
        <Container>
            <Movie><MdLocalMovies/><p>영화</p></Movie>
            <Game><SiYoutubegaming/><p>게임</p></Game>
            <Lives><RiBroadcastLine/><p>실시간</p></Lives>
            <Learn><AiFillBulb/><p>학습</p></Learn>
            <Sport><ImTrophy/><p>스포츠</p></Sport>
        </Container>
    )
}

const Container = styled.div`
  border-bottom: 1px solid rgb(229 229 229);
  padding-bottom: 15px;
  margin-bottom: 5px;
`;

const Movie = styled(SideMenu)`

`;

const Game = styled(SideMenu)`

`;

const Lives = styled(SideMenu)`

`;

const Learn = styled(SideMenu)`

`;

const Sport = styled(SideMenu)`

`;

export default YouTubeMore;
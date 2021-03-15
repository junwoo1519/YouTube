import React from "react";
import styled from "styled-components";
import {FaInbox} from "react-icons/fa";
import {GiBackwardTime} from "react-icons/gi";
import {RiVideoLine} from "react-icons/ri";
import {MdLocalMovies, MdWatchLater} from "react-icons/md";
import {AiTwotoneLike} from "react-icons/ai";
import {SideMenu} from "./SideMenu.Styled";

const UserVideoManagement = () => {

    return (
        <Container>
            <Locker><FaInbox/><p>보관함</p></Locker>
            <ViewRecord><GiBackwardTime/><p>시청 기록</p></ViewRecord>
            <MyVideo><RiVideoLine/><p>내 동영상</p></MyVideo>
            <MyMovie><MdLocalMovies><p>내 영화</p></MdLocalMovies></MyMovie>
            <LaterVideo><MdWatchLater/><p>나중에 볼 동영상</p></LaterVideo>
            <LikesVideo><AiTwotoneLike/><p>좋아요 표시한 동영상</p></LikesVideo>
        </Container>
    )
}

const Container = styled.div`
  border-bottom: 1px solid rgb(229 229 229);
  padding-bottom: 15px;
  margin-bottom: 5px;
`;

const Locker = styled(SideMenu)`

`;

const ViewRecord = styled(SideMenu)`

`;

const MyVideo = styled(SideMenu)`

`;

const MyMovie = styled(SideMenu)`

`;

const LaterVideo = styled(SideMenu)`

`;

const LikesVideo = styled(SideMenu)`

`;

export default UserVideoManagement;
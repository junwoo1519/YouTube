import React from "react";
import styled from "styled-components";
import {IoMdChatbubbles, IoMdSettings} from "react-icons/all";
import {MdFlag} from "react-icons/md";
import {AiFillQuestionCircle} from "react-icons/ai";
import {SideMenu} from "./SideMenu.Styled";

const Settings = () => {

    return (
        <Container>
            <Setting><IoMdSettings/><p>설정</p></Setting>
            <Report><MdFlag/><p>신고 기록</p></Report>
            <ServiceCenter><AiFillQuestionCircle/><p>고객센터</p></ServiceCenter>
            <Opinion><IoMdChatbubbles/><p>의견 보내기</p></Opinion>
        </Container>
    )
}

const Container = styled.div`
  border-bottom: 1px solid rgb(229 229 229);
  padding-bottom: 15px;
  margin-bottom: 5px;

`;

const Setting = styled(SideMenu)`

`;

const Report = styled(SideMenu)`

`;

const ServiceCenter = styled(SideMenu)`

`;

const Opinion = styled(SideMenu)`

`;

export default Settings;
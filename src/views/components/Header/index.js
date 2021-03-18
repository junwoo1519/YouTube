import React, {useState} from "react";
import styled from "styled-components";
import {IoMenu} from "react-icons/io5";
import {MdKeyboard, MdKeyboardVoice, MdSearch} from "react-icons/md";
import {CgMenuGridR} from "react-icons/cg";
import {HiOutlineDotsVertical, HiOutlineUser} from "react-icons/hi";
import {ImYoutube, ImYoutube2} from "react-icons/im";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineExport} from "react-icons/all";

import cn from "classnames";
import {useGoogleLogin, useGoogleLogout} from 'react-google-login';
import {useHistory} from "react-router-dom";

import {Action} from "../../../redux/auth/redux";
import {appAction} from "../../../redux/app/redux";

const Header = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const {user, isLoggedIn} = useSelector(state => state.auth);
    const {btn} = useSelector(state => state.app);

    const onSuccess = (res) => {
        const data = {
            profile: res.profileObj,
            access_token: res.accessToken
        };
        dispatch(Action.Creators.updateState({
            user: res.profileObj,
            isLoggedIn: true
        }))
        window.localStorage.setItem("auth", JSON.stringify(data))
    };

    const onLogoutSuccess = (res) => {
        dispatch(Action.Creators.updateState({
            user: null,
            isLoggedIn: false
        }))
        window.localStorage.removeItem("auth")
    }

    const {signIn} = useGoogleLogin({
        onSuccess,
        clientId: process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID,
        cookiePolicy: "single_host_origin",
        isSignedIn: true,
    });

    const {signOut} = useGoogleLogout({
        onLogoutSuccess,
        clientId: process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID,
        cookiePolicy: "single_host_origin",
        isSignedIn: true,
    });

    const onSubmit = function (e) {
        e.preventDefault()
        history.push(`/search/${query}`)
    };

    const [query, setQuery] = useState("");

    const onChange = function (e) {
        setQuery(e.target.value)
    };

    const handleBtn = function (status) {
        if (btn === true) {
            dispatch(appAction.Creators.updateState({
                btn: !status
            }))
        } else {
            dispatch(appAction.Creators.updateState({
                btn: status
            }))
        }
    }

    return (
        <Container>
            <MenuBtn onClick={() => handleBtn(true)}>
                <IoMenu/>
            </MenuBtn>
            {

            }
            <Logo onClick={() => history.push("/")}>
                <ImYoutube/>
                <ImYoutube2 className={"logoTitle"}/>
            </Logo>
            <Search>
                <Form onSubmit={onSubmit}>
                    <Input>
                        <input
                            type="search"
                            placeholder="검색"
                            onChange={onChange}
                        />
                        <Keyboard>
                            <MdKeyboard/>
                        </Keyboard>
                    </Input>
                    <SearchBtn onSubmit={onSubmit}>
                        <MdSearch/>
                    </SearchBtn>
                </Form>
                <VoiceBtn>
                    <MdKeyboardVoice/>
                </VoiceBtn>
            </Search>
            <User>
                <CgMenuGridR className={cn("AppBtn")}/>
                <HiOutlineDotsVertical className={cn("AppBtn")}/>
                {
                    isLoggedIn
                        ?
                        <>
                            <UserName>
                                <img src={user.imageUrl} alt=""/>
                            </UserName>
                            <Logout onClick={signOut}><AiOutlineExport/><p>LOGOUT</p></Logout>
                        </>
                        :
                        <LoginBtn onClick={signIn}>
                            <HiOutlineUser className={cn("LoginIcon")}/>
                            <p>로그인</p>
                        </LoginBtn>
                }
            </User>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 16px;
  background-color: #fff;
`;

const MenuBtn = styled.button`
  display: flex;
  padding: 8px;
  margin-right: 12px;
  font-size: 24px;
  color: #606060;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
  color: rgb(255, 0, 0);

  .logoTitle {
    font-size: 70px;
    margin-left: 3px;
  }

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 35%;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
`;


const Input = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    border: 1px solid #ccc;
    width: 100%;
    height: 30px;
    font-size: 16px;
    padding: 2px 6px;
    outline: none;
  }
`;

const Keyboard = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  font-size: 24px;
  padding: 0 4px;
  color: #606060;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -1px;
  width: 65px;
  padding: 1px 6px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  color: #828282;
  font-size: 20px;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #000;
    background-color: #eeeeee;
    box-shadow: 1px 1px #e7e7e7;
  }
`;

const VoiceBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: transparent;
  border: transparent;
  color: #606060;
  cursor: pointer;
  font-size: 24px;
  outline: none;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  padding: 8px;

  .AppBtn {
    color: #606060;
    cursor: pointer;
    margin-right: 20px;
  }
`;

const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #065fd4;
  border: 1px solid #065fd4;
  height: 40px;
  padding: 5px 11px;
  font-size: 15px;
  border-radius: 1px;
  cursor: pointer;
  outline: none;

  .LoginIcon {
    background-color: #065fd4;
    color: #fff;
    border-radius: 50%;
    font-size: 24px;
    margin-right: 10px;
  }
`;

const UserName = styled.div`
  img {
    border-radius: 50%;
    height: 32px;
    width: 32px;
  }
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  font-size: 26px;
  margin-left: 10px;
  color: #606060;
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 500;
  }
`;


export default Header;
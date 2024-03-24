import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import LogoImg from "../resource/images/header_logo.png";
import BodyContainer from "./BodyContainer";
import FlexBox from "./FlexBox";
import Icon from "./Icon";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goMain = () => {
        navMenuClick(0, headerMenu[0].link);
    };

    const goJoin = () => {
        navigate("/join");
    };

    const navMenuClick = (index, link) => {
        setTabCurrent(index);
        navigate(link);
    };

    const headerMenu = [
        {
            index: 0,
            title: "메인",
            link: "/",
        },
        {
            index: 1,
            title: "게시판",
            link: "/boardoard",
        },
        {
            index: 2,
            title: "자취생활",
            link: "/life",
        },
    ];

    const [tabCurrent, setTabCurrent] = useState(
        location.pathname === headerMenu[0].link
            ? 0
            : location.pathname === headerMenu[1].link
            ? 1
            : 2
    );

    return (
        <BodyContainer className="border-b-[1px] bg-white">
            <FlexBox justify="space-between" className="h-[60px] md:h-[90px]">
                <FlexBox className="h-full">
                    <img
                        onClick={() => {
                            goMain();
                        }}
                        src={LogoImg}
                        alt=""
                        className="h-[40px] md:h-[70px] md:mr-8 cursor-pointer"
                    />
                    <Nav className="h-full flex hidden lg:inline-flex">
                        {headerMenu.map((item, index) => (
                            <Nav.Item key={index} className="h-full">
                                <FlexBox className="h-full font-medium">
                                    <Nav.Link
                                        onClick={() => {
                                            navMenuClick(index, item.link);
                                        }}
                                        className="h-full py-[0] px-[25px] flex items-center font-18"
                                        style={{
                                            color: tabCurrent === index ? "#5e913b" : "black",
                                            borderBottom:
                                                tabCurrent === index
                                                    ? "2px solid #5e913b"
                                                    : "2px solid  white",
                                            transition: "color 0.3s, border-bottom 0.3s",
                                        }}
                                    >
                                        {item.title}
                                    </Nav.Link>
                                </FlexBox>
                            </Nav.Item>
                        ))}
                    </Nav>
                </FlexBox>
                <FlexBox>
                    {/* <FlexBox className="hidden lg:inline-flex md:mr-[20px]">
                        검색
                        <Icon icon={IoIosSearch} size={20} />
                    </FlexBox> */}
                    <button className="user-button select-none flex items-center px-[7px] py-[4px] mr-[4px]">
                        <Icon icon={FaRegUser} size={15} />
                        <div className="ml-1">로그인</div>
                    </button>
                    <button
                        className="user-button select-none flex items-center px-[7px] py-[4px]"
                        onClick={() => {
                            goJoin();
                        }}
                    >
                        <div className="ml-1">회원가입</div>
                    </button>
                </FlexBox>
            </FlexBox>
        </BodyContainer>
    );
};

export default Header;
import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BodyContainer from "../components/BodyContainer";
import Activity from "../screen/information/activity";
import Favorites from "../screen/information/favorites";
import Profile from "../screen/information/profile";
import { myPageVideosGet } from "../util/api.js";

const MyPage = () => {
    useLayoutEffect(() => {
        myPageVideosGet()
            .then((res) => {})
            .catch((error) => {
                console.error("myPageVideosGet error:", error);
            });
    }, []);

    const [tapCurrent, setTapCurrent] = useState(0);
    const navigate = useNavigate();

    const tapList = [
        {
            title: "프로필",
            link: "profile",
        },
        {
            title: "즐겨찾기",
            link: "favorites",
        },
        {
            title: "활동내역",
            link: "activity",
        },
    ];

    const pageChange = (item, index) => {
        setTapCurrent(index);
        navigate(`/myInfo/${item.link}`);
    };

    return (
        <BodyContainer>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex lg:flex-col items-start gap-4 py-[12px] lg:py-[24px] lg:dual-shadow lg:w-[20%] mr-[20px] lg:min-h-[650px]">
                    {tapList?.map((item, index) => (
                        <div key={index}>
                            <button
                                className="font-14 lg:px-[20px] lg:py-[4px] font-medium"
                                onClick={() => {
                                    pageChange(item, index);
                                }}
                                style={{
                                    color: tapCurrent === index ? "#5e913b" : "black",
                                    transition: "color 0.3s, border-bottom 0.3s",
                                }}
                            >
                                {item?.title}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="lg:py-[24px] lg:w-[90%]">
                    {tapCurrent === 0 ? (
                        <Profile />
                    ) : tapCurrent === 1 ? (
                        <Favorites />
                    ) : (
                        <Activity />
                    )}
                </div>
            </div>
        </BodyContainer>
    );
};

export default MyPage;

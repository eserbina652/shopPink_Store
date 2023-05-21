import React, {useEffect, useState} from 'react';
import {InputSearch, SearchWrap} from '../products';
import {FriendSvgWrap, SearchedUsers} from "./index";
import {useOutsideClick} from "../../../hooks/detectedClick";
import FriendsSvg from "../../../assets/images/FriendSvg";

const SearchUser = () => {
    const [inputValue, setInputValue] = useState('')
    const [userList, setUserList] = useState(false)

    useEffect(() => {
        if (inputValue) {
            setUserList(true);
        } else {
            setUserList(false);
        }
    }, [inputValue.length]);

    const handleClickOutside = () => {
        setUserList(false);
        setInputValue('')
    };

    const ref = useOutsideClick(handleClickOutside)

    return (<>
            <SearchWrap>
                <InputSearch
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <FriendSvgWrap>
                    <FriendsSvg/>
                </FriendSvgWrap>
            </SearchWrap>
            {userList &&
                //@ts-ignore
                <SearchedUsers ref={ref}>

                </SearchedUsers>
            }
        </>

    );
};

export default SearchUser;
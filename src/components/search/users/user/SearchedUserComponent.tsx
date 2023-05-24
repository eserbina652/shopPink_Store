import React from 'react';
import {DescriptionFont} from "../../../../styles";
import {useNavigate} from "react-router-dom";
import {FlexImg, ImgWrapper} from "../../products/product";
import {SearchedUser, UserDescriptionWrap} from "./index";
import {IUser} from "../../../../screens/profile/types";

interface ISearchedUser {
    user: IUser
    onClose: () => void
}

const SearchedUserComponent = ({user, onClose}: ISearchedUser) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/userDescription', {state: user})
    }
    return (
        <SearchedUser onClick={() => {
            handleClick()
            onClose()
        }}>
            <ImgWrapper width='100px'>
                <FlexImg src={user.image} alt={user.username}/>
            </ImgWrapper>
            <UserDescriptionWrap>
                <DescriptionFont fontSize='18px' padding='5px'>{user.username}</DescriptionFont>
                <DescriptionFont fontSize='14px' padding='5px'>Age: {user.age}</DescriptionFont>
                <DescriptionFont fontSize='14px' padding='5px'>Gender: {user.gender}</DescriptionFont>
            </UserDescriptionWrap>
        </SearchedUser>
    );
};

export default SearchedUserComponent;
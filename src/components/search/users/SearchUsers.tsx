import React, {useEffect, useState} from 'react';
import {api} from "../../../api/api";
import {DescriptionFont} from "../../../styles";
import {InputSearch} from '../products';
import {FriendSvgWrap, SearchedUsers, SearchUsersWrap} from "./index";
import SearchedUserComponent from "./user/SearchedUserComponent";
import FriendsSvg from "../../../assets/images/FriendSvg";
import {useOutsideClick} from "../../../hooks/detectedClick";

const SearchUser = () => {
  const [inputValue, setInputValue] = useState('');
  const [userList, setUserList] = useState(false);
  const [trigger, {data: usersArr}] = api.endpoints.getSearchedUsers.useLazyQuery();

  const onClose = () => {
    setInputValue('');
  };

  const getSearchedUsers = () => {
    trigger(inputValue);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      getSearchedUsers();
    }, 500);

    return () => clearTimeout(delay);
  }, [inputValue]);

  useEffect(() => {
    if (inputValue) {
      setUserList(true);
    } else {
      setUserList(false);
    }
  }, [inputValue.length]);

  const handleClickOutside = () => {
    setUserList(false);
    setInputValue('');
  };

  const ref = useOutsideClick(handleClickOutside);

  return (<>
    <SearchUsersWrap>
      <InputSearch
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <FriendSvgWrap>
        <FriendsSvg/>
      </FriendSvgWrap>
    </SearchUsersWrap>
    {userList &&
                //@ts-ignore
                <SearchedUsers ref={ref}>
                  {/*@ts-ignore*/}
                  {inputValue && usersArr?.users.length > 0 ? usersArr?.users.map((el, index) => {
                    return <SearchedUserComponent
                      onClose={onClose}
                      user={el}
                      key={index.toString()}/>;
                  }) :
                    <div style={{textAlign: "center"}}>
                      <DescriptionFont>Сould not be found</DescriptionFont>
                    </div>
                  }
                </SearchedUsers>
    }
  </>

  );
};

export default SearchUser;

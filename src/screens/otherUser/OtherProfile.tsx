import React from 'react';
import {ActivityPageWrap, PostsHeader, UserInfoHelpWrap} from "../profile";
import {useLocation} from "react-router-dom";
import {useGetUserPostsQuery} from "../../api/api";
import UserInfo from "../profile/additionalInfo/UserInfo";
import UserPost from "../profile/additionalInfo/UserPost";

const OtherProfile = () => {
  const userInfo = useLocation();
  const {state: otherUser} = userInfo;
  const user = localStorage.getItem('userId');
  // @ts-ignore
  const {id} = JSON.parse(user);
  const {data: userPosts} = useGetUserPostsQuery(id);
  return (
    <UserInfoHelpWrap>
      <UserInfo isUserPage={false} userInfo={otherUser}/>
      <ActivityPageWrap>
        <PostsHeader>User's posts</PostsHeader>
        {userPosts?.posts.map((el, index) => {
          return (
            <UserPost post={el} index={index} key={index.toString()}/>
          );
        })}
      </ActivityPageWrap>
    </UserInfoHelpWrap>
  );
};

export default OtherProfile;

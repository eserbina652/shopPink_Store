import React, {useEffect} from 'react';
import {api, useGetUserPostsQuery} from "../../api/api";
import {Loading} from "../../styles";
import {ActivityPageWrap, PostsHeader} from "./index";
import UserInfo from "./additionalInfo/UserInfo";
import UserPost from "./additionalInfo/UserPost";

const Profile = () => {
  const user = localStorage.getItem('userId');
  // @ts-ignore
  const {id} = JSON.parse(user);
  const [trigger, {data: userInfo}] = api.endpoints.getSingleUser.useLazyQuery();
  const {data: userPosts} = useGetUserPostsQuery(id);
  const getUser = () => {
    if (user) {
      trigger(id);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (<>
    {userInfo ? <div style={userInfo ? {top: '0'} : {top: '50vh'}}>
      <UserInfo userInfo={userInfo}/>
      <ActivityPageWrap>
        <PostsHeader>User's posts</PostsHeader>
        {userPosts?.posts.map((el, index) => {
          return (
            <UserPost post={el} index={index} key={index.toString()}/>
          );
        })}
      </ActivityPageWrap>
    </div> : <Loading/>}
  </>

  );
};

export default Profile;
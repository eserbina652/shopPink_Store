import React, { useEffect } from "react";
import { api, useGetUserPostsQuery } from "../../api/api";
import { PrimaryFont } from "../../styles";
import {
  ActivityPageWrap,
  PostsHeader,
  ProfileNullTextWrap,
  UserInfoWrapper,
} from "./index";
import UserInfo from "./additionalInfo/UserInfo";
import UserPost from "./additionalInfo/UserPost";

const Profile = () => {
  const user = localStorage.getItem("userId");
  console.log("USER", user);
  // @ts-ignore
  const parsedUser = JSON.parse(user);

  const id = parsedUser ? parsedUser.id : null;
  const [trigger, { data: userInfo }] =
    api.endpoints.getSingleUser.useLazyQuery();
  const { data: userPosts } = useGetUserPostsQuery(id);
  const getUser = () => {
    if (user !== null) {
      trigger(id);
    } else {
      return (
        <PrimaryFont>
          Unfortunately you're not a registered user, if you come back to the
          logIn form and typed next <br />
          username: kminchelle <br />
          password: 0lelplR <br />
          then, you'll have to see the profile page. Good luck!
        </PrimaryFont>
      );
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {user !== null ? (
        <UserInfoWrapper>
          <UserInfo userInfo={userInfo} />
          <ActivityPageWrap>
            <PostsHeader>User's posts</PostsHeader>
            {userPosts?.posts.map((el, index) => {
              return (
                <UserPost post={el} index={index} key={index.toString()} />
              );
            })}
          </ActivityPageWrap>
        </UserInfoWrapper>
      ) : (
        <ProfileNullTextWrap>
          <PrimaryFont>
            Unfortunately you're not a registered user, if you come back to the
            logIn form and typed next <br />
            username: kminchelle <br />
            password: 0lelplR <br />
            then, you'll have to see the profile page. Good luck!
          </PrimaryFont>
        </ProfileNullTextWrap>
      )}
    </>
  );
};

export default Profile;

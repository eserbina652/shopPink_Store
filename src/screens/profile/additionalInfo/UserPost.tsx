import React from 'react';
import {PostImage, PostReactionBlock, PostsHeader, PostTextWrap, PostWrap, TagsWrap} from "../index";
import {DescriptionFont, PrimaryFont} from "../../../styles";
import {reaction} from "../../../assets";
import {Posts} from "../types";

interface IUserPosts {
    post: Posts;
    index: number
}

const UserPost = ({post}: IUserPosts) => {
    return (
        <PostWrap>
            <PostTextWrap>
                <PostsHeader>
                    <PrimaryFont>{post.title}</PrimaryFont>
                </PostsHeader>
                <DescriptionFont padding={'5px 40px 5px 40px'}>{post.body}</DescriptionFont>
            </PostTextWrap>
            <PostReactionBlock>
                <TagsWrap>
                    <DescriptionFont>#{post.tags[0]}</DescriptionFont>
                    <DescriptionFont>#{post.tags[1]}</DescriptionFont>
                </TagsWrap>
                <DescriptionFont>{post.reactions}</DescriptionFont>
                <PostImage src={reaction}/>
            </PostReactionBlock>
        </PostWrap>
    );
};

export default UserPost;
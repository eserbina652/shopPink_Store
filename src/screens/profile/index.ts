import styled from "styled-components";
import {ImageSearch} from "../../components/search/products";


export const UserInformationWrapper = styled.div`
  display: flex;
  margin: 5vh -10vw 5vw 8vw;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  margin: 30px;
`;

export const UserMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: ${props => props.theme.elements.secondary} 2px solid;
  align-items: center;
  border-radius: 50px;
  box-shadow: ${props => props.theme.colors.shadow} 5px 10px 20px 1px;
  justify-content: center;
  padding: 20px;
`;

export const UserImage = styled(ImageSearch)`
  width: 50%;
  height: 28%;
  background-color: ${props => props.theme.elements.secondary};
  box-shadow: ${props => props.theme.colors.shadow} 5px 10px 20px 1px;
`;

export const UserFont = styled.p`
  font-size: 22px;
  color: ${props => props.theme.elements.secondary};
  padding: 5px;
  text-align: center;
`;

export const UserAdditionalInform = styled(UserMainInfo)`
  flex-direction: row;
  margin: 10px 20px;
  min-width: 97%;
  justify-content: space-around;
`;
export const AdditionalInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActivityPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10vh 20vh 10vh 20vh;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  box-shadow: 0vh 1vw 5vw 0vh ${props => props.theme.posts.transparent};
  // background: radial-gradient(
  //   circle,
  //    0%,
  //   rgba(255, 246, 246, 1) 70%,
  //   rgba(255, 192, 203, 1) 100%
  // );
`;
export const PostsHeader = styled.p`
  color: ${props => props.theme.posts.secondary};
  font-size: 25px;
  width: 100%;
  box-shadow: ${props => props.theme.posts.accentColor} 1vh -2vw 16vw 0.1vw;;
  background-color: ${props => props.theme.posts.primary};
  padding-top: 20px;
  border-start-start-radius: 40px;
  border-top-right-radius: 40px;
  font-weight: bold;
  text-align: center;
`;
export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: ${props => props.theme.posts.secondary} 2px solid;
  border-radius: 40px;
  margin: 5vh 5vw 5vh 5vw;
  box-shadow: 10px 10px 10px 1px rgb(146, 137, 157);
`;

export const PostTextWrap = styled.div`
  padding: 0;
`;

export const PostText = styled.p<{ isTag?: boolean }>`
  font-size: ${(props) => (props.isTag ? "18px" : "20px")};
`;

export const PostReactionBlock = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${props => props.theme.buttons.primary};
`;

export const TagsWrap = styled.div`
  display: flex;
`;
export const PostImage = styled(ImageSearch)`
  width: 30px;
  height: 30px;
  margin: 3px;
`;

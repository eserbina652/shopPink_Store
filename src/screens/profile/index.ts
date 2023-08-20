import styled from "styled-components";
import { ImageSearch } from "../../components/search/products";

export const ProfileNullTextWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20vh;
`;

export const UserInformationWrapper = styled.div`
  display: flex;
  @media (max-width: 769px) {
    flex-direction: column;
    margin-top: 100px;
  }
  @media (max-width: 480px) {
    margin-top: 120px;
  }
`;

export const UserInfoHelpWrap = styled.div`
  margin-top: 50px;
  @media (max-width: 769px) {
    margin-top: -50px;
  }
`;
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 50px;
`;

export const UserMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: ${(props) => props.theme.elements.secondary} 2px solid;
  align-items: center;
  border-radius: 50px;
  height: fit-content;
  box-shadow: ${(props) => props.theme.colors.shadow} 5px 10px 20px 1px;
  padding: 20px;
`;

export const UserImage = styled(ImageSearch)`
  width: 50%;
  height: auto;
  background-color: ${(props) => props.theme.elements.secondary};
  box-shadow: ${(props) => props.theme.colors.shadow} 5px 10px 20px 1px;
`;

export const UserFont = styled.p`
  font-size: 22px;
  color: ${(props) => props.theme.elements.secondary};
  padding: 5px;
  text-align: center;
`;

export const UserAdditionalInform = styled(UserMainInfo)`
  margin: 10px 20px;
  min-width: fit-content;
  justify-content: space-around;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const AdditionalInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserInfoWrapper = styled.div`
  margin: 50px;
  @media (max-width: 769px) {
    margin: 5px;
  }
`;
export const ActivityPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  box-shadow: 0 1vw 5vw 0 ${(props) => props.theme.posts.transparent};
  @media (max-width: 769px) {
    margin: 30px;
  }
`;
export const PostsHeader = styled.p`
  color: ${(props) => props.theme.posts.secondary};
  font-size: 25px;
  width: 100%;
  box-shadow: ${(props) => props.theme.posts.accentColor} 1vh -2vw 16vw 0.1vw;
  background-color: ${(props) => props.theme.posts.primary};
  padding-top: 20px;
  border-start-start-radius: 40px;
  border-top-right-radius: 40px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 480px) {
    border-start-start-radius: 20px;
    border-top-right-radius: 20px;
  }
`;
export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: ${(props) => props.theme.posts.secondary} 2px solid;
  border-radius: 40px;
  margin: 5vh 5vw 5vh 5vw;
  box-shadow: 10px 10px 10px 1px rgb(146, 137, 157);
  @media (max-width: 480px) {
    border-radius: 20px;
  }
`;

export const PostTextWrap = styled.div`
  padding: 0;
`;

export const PostReactionBlock = styled.div`
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-top: 1px solid ${(props) => props.theme.buttons.primary};
`;

export const TagsWrap = styled.div`
  display: flex;
`;
export const PostImage = styled(ImageSearch)`
  width: 30px;
  height: 30px;
  margin: 3px;
`;

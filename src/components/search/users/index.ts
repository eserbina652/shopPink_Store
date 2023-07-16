import styled from "styled-components";
import {SearchedProducts, SearchWrap} from "../products";

export const SearchUsersWrap = styled(SearchWrap)`
  align-items: end;
  @media (max-width: 769px){
    position: absolute;
    top: 115px;
    right: 70px;
  }
`;
export const SearchedUsers = styled(SearchedProducts)`
  padding: 10px;
  left: 15px;
  top: 280px;


`;

export const FriendSvgWrap = styled.div`
  margin-top: -1vw;
`;


import styled from "styled-components";

export const BurgerMenuContent = styled.div`
    display: flex;
  flex-direction: column;
  //background-color: ${props => props.theme.posts.accentColor};
`;

export const BurgerHeader = styled.div`
    display: flex;
  justify-content: flex-end;
`;

export const LogoName = styled.h1`
    color: ${props => props.theme.posts.primary};
  font-size: 18px;
`;

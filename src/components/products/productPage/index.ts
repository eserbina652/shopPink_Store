import styled from "styled-components";

export const ElementSContainer = styled.div`
  display: flex;
  max-height: max-content;
  border: 3px solid ${props => props.theme.buttons.secondary};
  border-radius: 20px;
  justify-content: center;
  box-shadow: 10px 10px 10px 1px ${props => props.theme.colors.shadow};
  margin: 30px;
`;

export const Elements = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  & img {
    width: auto;
  }
  @media (max-width: 768px) {
    min-width: 50vw;
  }
`;

export const CategoryListWrap = styled.div`
  display: flex;
  margin-left: 10%;
  max-width: 85%;
  flex-wrap: wrap;
`;
import styled from "styled-components";

export const ElementSContainer = styled.div`
  display: flex;
  height: fit-content;
  min-height: 300px;
  border: 3px solid ${props => props.theme.buttons.secondary};
  border-radius: 20px;
  justify-content: center;
  box-shadow: 10px 10px 10px 1px ${props => props.theme.colors.shadow};
  margin: 30px;
  @media (max-width: 769px) {
    max-height: 45vw;
  }
  @media (max-width: 480px) {
    align-items: center;
    padding: 20px;
  }
  @media (max-width: 480px) {
    min-height: fit-content;
    min-width: fit-content;
    max-height: fit-content;
  }
`;

export const Elements = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 20vw;
  padding-top: 20px;
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
  @media (max-width: 769px) {
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

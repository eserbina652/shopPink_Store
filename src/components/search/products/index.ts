import styled from "styled-components";

export const SearchWrap = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InputSearch = styled.input`
  background: none;
  border: none;
  font-size: 20px;
  color: white;
  max-height: 30px;
  margin-top: 2vw;
  padding: 0;
  border-bottom: ${props => props.theme.elements.secondary} 2px solid;

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    max-width: 15vw;
    font-size: 18px;
    max-height: 20px;
    margin-bottom: 25px;
  }
  @media (max-width: 768px) {
    //max-width: 15vw;
    //font-size: 16px;
    //max-height: fit-content;
    //margin: 0;
  }
`;

export const ImageSearch = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: -20px;
  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
    margin-bottom: 25px;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }
`;

export const SearchedProducts = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: 500px;
  padding: 20px;
  position: absolute;
  overflow: auto;
  max-width: max-content;
  min-width: 20vw;
  overflow-x: hidden;
  top: 130px;
  background-color: transparent;
  border: ${props => props.theme.buttons.secondary} 1px solid;
  border-radius: 30px;
  backdrop-filter: blur(5px);

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.posts.accentColor};
    border-radius: 20px;
    box-shadow: ${props => props.theme.buttons.secondary} 2px 4px 10px 1px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 30px;
    background-color: transparent;
    box-shadow: inset 3px 10px 6px -2px ${props => props.theme.colors.shadow};
    margin: 24px;
  }
`;



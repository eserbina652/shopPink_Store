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
  max-height: 30px;
  margin-top: 2vh;
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

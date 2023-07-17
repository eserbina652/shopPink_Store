import styled from "styled-components";

export const ProductDescriptionWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 5vw 15vw;
  max-height: 35vw;
  min-height: 35vw;
  grid-gap: 20px;
  @media (max-width: 1024px) {
    margin: 7vw 3vw;
    grid-gap: 10px;
  }
`;

export const ImageGallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: ${props => props.theme.elements.secondary} 2px solid;
  border-radius: 30px;
  //padding: 10px;
  max-height: 35vw;
  min-height: 35vw;
  box-shadow: 10px 10px 10px 1px ${props => props.theme.colors.shadow};
  @media (max-width: 1024px) {
    max-width: 65vw;
    max-height: 50vw;
  }
  @media (max-width: 768px) {
    grid-column: 1/3;
    grid-row: 1/2;
    margin-left: 11vw;
    max-width: 70vw;
    max-height: 30vw;
  }
`;
export const ImageInGallery = styled.img`
  max-width: 75%;
  height: auto;
  box-shadow: 10px 10px 10px 1px ${props => props.theme.colors.shadow};
`;
export const Image = styled.img`
  max-width: 50%;
  max-height: 50%;
  box-shadow: 10px 10px 10px 1px ${props => props.theme.colors.shadow};
`;
export const DescImage = styled(Image)`
  max-width: 80%;
  max-height: 80%;
`;

export const IncDecWrap = styled.div`
  display: inherit;
  justify-content: center;
`;

export const DescriptionBox = styled.div`
  display: grid;
  border: ${props => props.theme.elements.secondary} 2px solid;
  border-radius: 30px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-template-rows: 0.3fr 0.3fr 0.3fr 0.6fr 0.3fr;
  box-shadow: 10px 10px 10px 1px ${props => props.theme.colors.shadow};
  @media (max-width: 1024px) {
    padding: 15px;
    max-width: 55vw;
    max-height: 50vh;
  }
  @media (max-width: 768px) {
    grid-column: 1/3;
    grid-row: 2/4;
    margin-left: 11vw;
    max-width: 70vw;
  }
`;
export const FocusElement = styled.div`
    background-color: ${props => props.theme.colors.shadow};
`;


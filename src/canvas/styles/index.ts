import styled from "styled-components";

export const CanvasPage = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const BodyCanvas = styled.div`
  background-color: black;
  margin-top: -50px;
`;

export const Canvas = styled.canvas`
  position: absolute;
  max-width: 100%;
  @media (max-width: 768px) {
    margin-top: -60px;
  }
`;

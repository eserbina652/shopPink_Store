import styled from "styled-components";

export const GridBox = styled.div<{
  alignItems?: string;
  justifyContent?: string;
  justifySelf?: string;
  margin?: string;
  tempCol?: string;
  tempRow?: string;
  isLoginned?: boolean;
}>`
  display: flex;
  position: relative;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  margin: ${({ margin }) => margin || "0"};
  border: ${(props) => props.theme.colors.secondary};
  min-height: 45vw;
  background-color: ${(props) => props.theme.colors.secondary};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px ${(props) => props.theme.elements.secondary} solid;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  padding: 30px;
  margin: 0 auto;
  max-height: min-content;
  box-shadow: 10px 10px 10px 1px ${(props) => props.theme.elements.secondary};
  @media (max-width: 768px) {
    margin-top: 120px;
  }
`;

export const Inputs = styled.input.attrs({ type: "text" })`
  background: ${(props) => props.theme.elements.primary};
  color: ${(props) => props.theme.fontColors.primary};
  margin-top: 10px;
  cursor: pointer;
  margin-bottom: 0;
  min-width: 20vw;
  width: 100%;
  font-size: 20px;
  border-radius: 5px;
  height: 35px;
  border-color: ${(props) => props.theme.elements.primary};
  outline-color: ${(props) => props.theme.elements.secondary};
  text-align: center;
`;

export const AppBgWrap = styled.div`
  background-color: ${(props) => props.theme.elements.primary};
`;

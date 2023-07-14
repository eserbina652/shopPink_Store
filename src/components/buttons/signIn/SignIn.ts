import styled from "styled-components";


export const SignIn = styled.button`
  margin: 20px 10px 0 10px;
  font-size: 20px;
  background-color: ${props => props.theme.buttons.primary};
  color: ${props => props.theme.fontColors.secondary};
  border: 2px ${props => props.theme.buttons.secondary} solid;
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;

  &:hover {
    background-color: ${props => props.theme.buttons.secondary};
    border: 2px ${props => props.theme.buttons.border} solid;
  }
`;
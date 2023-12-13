import styled from "styled-components";
import { theme } from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  padding-bottom: 8px;
`;

export const Input = styled.input`
  display: flex;
  height: 30px;
  width: auto;
  border-radius: 8px;
  border: 2px solid ${theme.palette.secondary.main};
  background: ${theme.palette.background.paper};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  font-size: ${theme.palette.secondary.main};
  transition: border-color 0.2s ease-in;
  appearance: none;
  font-weight: ${theme.palette.secondary.main};
  color: ${theme.palette.text.primary};
  margin-bottom: 4px;
`;

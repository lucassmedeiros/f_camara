import styled from "styled-components";

import image from "../../assets/background.jpg";
import { theme } from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Form = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0 4px 8px ${theme.palette.text.primary};
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    margin-bottom: 16px;
  }

  button {
    padding: 10px;
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.background.paper};
    cursor: pointer;
  }
`;

export const ContainerImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  height: 100%;

  img {
    object-fit: cover;
    background: cover;
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 8px ${theme.palette.text.primary};
  }
`;

export const ContainerBackground = styled.div`
  display: flex;
  background: ${theme.palette.success.main};
  width: auto;
`;

export const TitleLabel = styled.label`
  color: ${theme.palette.text.primary};
`;

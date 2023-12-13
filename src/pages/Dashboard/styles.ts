import styled from "styled-components";
import { theme } from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: ${theme.palette.text.primary};
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
    background-color: ${theme.palette.info.main};
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
  background: ${theme.palette.success.light};
  border-radius: 10px;
`;

export const ContainerContent = styled.div`
  background: ${theme.palette.background.paper};
  border-radius: 10px;
  width: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 20px;
`;

export const Tilte = styled.label`
  color: ${theme.palette.text.primary};
`;

export const ImageAvatar = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
`;

export const ContainerText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px 0;
`;

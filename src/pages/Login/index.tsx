import { Controller } from "react-hook-form";
import { Button } from "../../components/button/index";
import { TextInput } from "../../components/textInput/index";
import { useAuth } from "../../context/AuthContext";
import { message } from "../../messages/index";
import {
  Container,
  ContainerBackground,
  Form,
  FormContainer,
  FormTitle,
} from "./styles";
import { useLogin } from "./useLogin";

export const Login = () => {
  const { onSubmit, handleSubmit, control } = useLogin();

  const { isAuthLoading } = useAuth();
  return (
    <Container>
      <ContainerBackground>
        <Form>
          <FormTitle>{message("messages.vr")}</FormTitle>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextInput
                  label={message("messages.userName")}
                  type="text"
                  {...field}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextInput
                  label={message("messages.password")}
                  type="password"
                  {...field}
                />
              )}
            />

            <Button variant="primary" type="submit" disabled={isAuthLoading}>
              {isAuthLoading
                ? message("messages.loading")
                : message("messages.login")}
            </Button>
          </FormContainer>
        </Form>
      </ContainerBackground>
    </Container>
  );
};

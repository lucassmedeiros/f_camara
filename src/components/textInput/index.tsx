import { Container, Input, Label } from "./styles";

type TextInputProps = {
  label?: string;
  errorInput?: string;
};

export const TextInput = ({ label, errorInput, ...rest }: TextInputProps) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input {...rest} />
    </Container>
  );
};

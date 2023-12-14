import { Container, Input, Label } from "./styles";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  readonly Tag?: string;
  readonly key?: string;
}

export const TextInput = ({ label, ...rest }: TextInputProps) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input {...rest} />
    </Container>
  );
};

import { Container } from "./styles";

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children?: React.ReactNode;
  color?: string;
  background?: string;
}

export const Button = ({
  variant = "primary",
  color,
  background,
  children,
  ...rest
}: props) => {
  return (
    <Container
      background={background}
      variant={variant}
      color={color}
      {...rest}
    >
      {children}
    </Container>
  );
};

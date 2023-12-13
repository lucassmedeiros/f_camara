import styled from "styled-components";
import { theme } from "../../styles/themes";

export const Container = styled.button<{
  variant?: "primary" | "outline";
  background?: string;
  color?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: ${theme.typography.fontSize};

  ${({ theme, variant, background }) => {
    if (variant === "primary") {
      return `
        height: 40px;
        background:  ${background ? background : theme.palette.primary.main};
      `;
    }

    if (variant === "outline") {
      return `
        height: 40px;
        background: transparent;
        background: ${background ? background : theme.palette.primary.dark};
      `;
    }

    return "";
  }}
`;

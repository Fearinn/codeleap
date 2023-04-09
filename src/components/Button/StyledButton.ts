import styled from "styled-components";
import { TButton, TButtonVariant } from "./TButton";
import { colors } from "../../assets/cssVariables";

function handleVariant(variant: TButtonVariant) {
  if (variant === "primary") return colors.brandPrimary;
  if (variant === "positive") return colors.buttonPositive;
  if (variant === "negative") return colors.buttonPositive;
  if (variant === "transparent") return "transparent";
}

export const StyledButton = styled.button`
  background-color: ${(props: TButton) => handleVariant(props.variant)};
  border-radius: 8px;
  color: ${(props: TButton) =>
    props.variant === "transparent"
      ? colors.fontPrimary
      : colors.fontSecondary};
  padding: 0.5rem 2rem;
  width: fit-content;
`;

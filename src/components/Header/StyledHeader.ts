import styled from "styled-components";
import { colors } from "../../assets/cssVariables";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: ${colors.brandPrimary};
  color: ${colors.fontSecondary};
  font-size: 1.375rem;
  font-weight: bold;
  padding: 2.312rem 1.685rem;
  width: 100%;

  .buttons {
    display: flex;
    gap: 1.5rem;
  }
`;

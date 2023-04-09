import styled from "styled-components";
import { colors } from "../../assets/cssVariables";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background-color: rgba(101, 101, 101, 0.85);
  padding: 0.5rem;
  width: 100%;
  z-index: 999;

  .box {
    animation-name: fadeIn;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: ${colors.backgroundPrimary};
    border-radius: 16px;
    padding: 1.5rem;
    width: fit-content;

    @keyframes fadeIn {
      0% {
        position: relative;
        bottom: -50%;
      }

      30% {
        bottom: 0;
      }

      100% {
        position: unset;
      }
    }

    header {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;

      h2 {
        font-size: 1.375rem;
      }

      button {
        background-color: transparent;
        border: none;
        color: ${colors.fontPrimary};
        cursor: pointer;
        font-size: 1.125rem;
      }
    }
  }
`;

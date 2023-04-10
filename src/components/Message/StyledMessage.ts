import styled from "styled-components";

export const StyledMessage = styled.p`
  color: ${(props: { error: boolean }) => (props.error ? "red" : "green")};
  background-color: ${(props: { error: boolean }) =>
    props.error ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 255, 0, 0.1)"};
  padding: 0.5rem;
  text-align: center;
  width: 100%;
`;

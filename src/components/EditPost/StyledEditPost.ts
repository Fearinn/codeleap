import styled from "styled-components";

export const StyledEditPost = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 16px;
  border: 1px solid #999999;
  font-size: 1.375rem;
  padding: 1.5rem;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    align-self: flex-end;
  }
`;

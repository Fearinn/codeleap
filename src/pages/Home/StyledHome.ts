import styled from "styled-components";

export const StyledHome = styled.main`
  justify-content: center;
  gap: 0.5rem;

  img {
    max-width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    width: 500px;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    input {
      border: 1px solid #777777;
      border-radius: 8px;
      padding: 0.5rem;
    }

    button {
      margin-top: 1rem;
      align-self: flex-end;
    }
  }
`;

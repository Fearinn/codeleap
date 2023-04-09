import styled from "styled-components";

export const StyledPostCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  word-wrap: break-word;
  width: 100%;

  header {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    border: 1px solid #999999;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    font-size: 1.125rem;
  }

  .creation-info {
    display: flex;
    justify-content: space-between;
    color: #777777;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  h2 {
    word-wrap: break-word;
    word-break: break-all;
  }

  button {
    background-color: transparent;
  }
`;

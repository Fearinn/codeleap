/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { StyledButton } from "../Button/StyledButton";
import { StyledInput } from "../Input/StyledInput";
import { StyledNewPost } from "./StyledNewPost";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks";
import { postsService } from "../../actions/services/posts";
import { postsActions } from "../../redux/reducers/posts";

export function NewPost() {
  const username = useTypedSelector((state) => state.usernameReducer);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useTypedDispatch();

  async function addPost(username: string, title: string, content: string) {
    await postsService.save(username, title, content);
    const response = await postsService
      .fetch()
      .catch(() =>
        alert("There was an unexpected error! Please try again later")
      );

    if (response) dispatch(postsActions.setPosts(response.results));
  }

  return (
    <StyledNewPost
      onSubmit={(event) => {
        event.preventDefault();
        addPost(username, title, content);
      }}
    >
      <h2>What's on your mind?</h2>
      <div className="container">
        <label>Title</label>
        <StyledInput
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="container">
        <label>Content</label>
        <StyledInput
          as="textarea"
          name="content"
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <StyledButton
        disabled={!username || !content || !title}
        variant="primary"
      >
        Create
      </StyledButton>
    </StyledNewPost>
  );
}

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { postsService } from "../../actions/services/posts";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks";
import { errorActions } from "../../redux/reducers/error";
import { postsActions } from "../../redux/reducers/posts";
import { successActions } from "../../redux/reducers/success";
import { StyledButton } from "../Button/StyledButton";
import { StyledInput } from "../Input/StyledInput";
import { StyledNewPost } from "./StyledNewPost";

export function NewPost() {
  const username = useTypedSelector((state) => state.usernameReducer);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useTypedDispatch();

  async function addPost(username: string, title: string, content: string) {
    try {
      await postsService.save(username, title, content);
      const { results } = await postsService.fetch();

      dispatch(successActions.setSuccess(true));
      dispatch(postsActions.setPosts(results));
    } catch (err) {
      dispatch(errorActions.setError(true));
    }
  }

  return (
    <StyledNewPost
      onSubmit={async (event) => {
        event.preventDefault();
        await addPost(username, title, content);
        setTitle("");
        setContent("");
      }}
    >
      <h2>What's on your mind?</h2>
      <div className="container">
        <label htmlFor="title">Title</label>
        <StyledInput
          name="title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="container">
        <label htmlFor="content">Content</label>
        <StyledInput
          value={content}
          as="textarea"
          name="content"
          id="content"
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

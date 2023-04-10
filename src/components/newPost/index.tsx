/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { StyledButton } from "../Button/StyledButton";
import { StyledInput } from "../Input/StyledInput";
import { StyledNewPost } from "./StyledNewPost";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks";
import { postsService } from "../../actions/services/posts";
import { postsActions } from "../../redux/reducers/posts";
import { errorActions } from "../../redux/reducers/error";
import { successActions } from "../../redux/reducers/success";

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
        <label>Title</label>
        <StyledInput
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="container">
        <label>Content</label>
        <StyledInput
          as="textarea"
          name="content"
          value={content}
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

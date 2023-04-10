import { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks";
import { TPost } from "../../types/TPost";
import { compareDates } from "../../utils/compareDates";
import { Header } from "../Header";
import { StyledPostCard } from "./StyledPostCard";
import { postsService } from "../../actions/services/posts";
import { Modal } from "../Modal";
import { StyledButton } from "../Button/StyledButton";
import { StyledInput } from "../Input/StyledInput";
import { StyledEditPost } from "../EditPost/StyledEditPost";
import { postsActions } from "../../redux/reducers/posts";
import { errorActions } from "../../redux/reducers/error";
import { successActions } from "../../redux/reducers/success";

export function PostCard({
  id,
  title,
  content,
  username,
  created_datetime,
}: TPost) {
  const [timeSinceCreated, setTimeSinceCreated] = useState(
    compareDates(new Date(created_datetime))
  );

  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const dispatch = useTypedDispatch();

  async function editPost() {
    try {
      await postsService.edit(id, editedTitle, editedContent);
      const { results } = await postsService.fetch();
      dispatch(postsActions.setPosts(results));
      dispatch(successActions.setSuccess(true));
    } catch (err) {
      dispatch(errorActions.setError(true));
    }
    closeModal("edit");
  }

  async function deletePost() {
    try {
      await postsService.delete(id);
      const { results } = await postsService.fetch();
      dispatch(postsActions.setPosts(results));
      dispatch(successActions.setSuccess(true));
    } catch (err) {
      dispatch(errorActions.setError(true));
    }
    closeModal("delete");
  }

  function openModal(modal: "edit" | "delete") {
    if (modal === "edit") setEditModal(true);
    if (modal === "delete") setDeleteModal(true);
  }

  function closeModal(modal: "edit" | "delete") {
    if (modal === "edit") setEditModal(false);
    if (modal === "delete") setDeleteModal(false);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSinceCreated(compareDates(new Date(created_datetime)));
    }, 1000 * 60);

    return () => {
      clearInterval(intervalId);
    };
  });

  const storedUsername = useTypedSelector((state) => state.usernameReducer);

  function deleteModalComponent() {
    return (
      <Modal
        htmlId="delete-modal"
        onClose={() => closeModal("delete")}
        open={deleteModal}
        title={"Are you sure you want to delete this item?"}
      >
        <StyledEditPost>
          <div className="buttons">
            <StyledButton
              variant="transparent"
              type="reset"
              onClick={() => closeModal("delete")}
            >
              Cancel
            </StyledButton>
            <StyledButton
              variant="negative"
              type="button"
              onClick={() => deletePost()}
            >
              Delete
            </StyledButton>
          </div>
        </StyledEditPost>
      </Modal>
    );
  }

  function editModalComponent() {
    return (
      <Modal
        title="Edit item"
        open={editModal}
        htmlId={id.toString()}
        onClose={() => closeModal("edit")}
      >
        <StyledEditPost
          onSubmit={(event) => {
            event.preventDefault();
            editPost();
          }}
        >
          <div className="container">
            <label htmlFor="">Title</label>
            <StyledInput
              type="text"
              id="title"
              name="title"
              value={editedTitle}
              onChange={(event) => setEditedTitle(event.target.value)}
              required
            />
          </div>
          <div className="container">
            <label htmlFor="content">Content</label>
            <StyledInput
              as="textarea"
              name="content"
              id="content"
              value={editedContent}
              onChange={(event) => setEditedContent(event.target.value)}
              required
            />
          </div>
          <div className="buttons">
            <StyledButton
              variant="transparent"
              onClick={() => closeModal("edit")}
              type="reset"
            >
              Cancel
            </StyledButton>
            <StyledButton
              variant="positive"
              disabled={!editedTitle || !editedContent}
              type="submit"
            >
              Edit
            </StyledButton>
          </div>
        </StyledEditPost>
      </Modal>
    );
  }

  return (
    <StyledPostCard>
      {editModalComponent()}
      {deleteModalComponent()}
      <Header
        editable={username === storedUsername}
        onEdit={() => openModal("edit")}
        onDelete={() => openModal("delete")}
      >
        {title}
      </Header>
      <div className="content-container">
        <div className="creation-info">
          <p>@{username}</p>
          <time>{timeSinceCreated}</time>
        </div>
        <p>{content}</p>
      </div>
    </StyledPostCard>
  );
}

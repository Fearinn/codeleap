import { useTypedSelector } from "../../redux/hooks";
import { TPost } from "../../types/TPost";
import { compareDates } from "../../utils/compareDates";
import { Header } from "../Header";
import { StyledPostCard } from "./StyledPostCard";

export function PostCard({
  title,
  content,
  username,
  created_datetime,
}: TPost) {
  const timeSinceCreated = compareDates(new Date(created_datetime));
  const storedUsername = useTypedSelector((state) => state.usernameReducer);
  return (
    <StyledPostCard>
      <Header editable={username === storedUsername}>{title}</Header>
      <div className="container">
        <div className="creation-info">
          <p>@{username}</p>
          <time>{timeSinceCreated}</time>
        </div>
        <p>{content}</p>
      </div>
    </StyledPostCard>
  );
}

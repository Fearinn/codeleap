import { useEffect } from "react";
import { StyledPosts } from "./StyledPosts";
import { postsService } from "../../actions/services/posts";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { NewPost } from "../../components/newPost";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../redux/hooks";
import { postsActions } from "../../redux/reducers/posts";

export function Posts() {
  const posts = useTypedSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    postsService
      .fetch()
      .then((response) => dispatch(postsActions.setPosts(response.results)))
      .catch(() =>
        alert("There was an unexpected error! Please try again later.")
      );
  }, []);

  return (
    <>
      <Header>CodeLeap Network</Header>
      <StyledPosts>
        <ul className="posts">
          <NewPost />
          {posts.map((post) => {
            return <PostCard {...post} key={post.id}></PostCard>;
          })}
        </ul>
      </StyledPosts>
    </>
  );
}

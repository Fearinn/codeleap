import { useEffect, useState } from "react";
import { StyledPosts } from "./StyledPosts";
import { postsService } from "../../actions/services/posts";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { NewPost } from "../../components/CreatePost";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../redux/hooks";
import { postsActions } from "../../redux/reducers/posts";
import { StyledButton } from "../../components/Button/StyledButton";
import { Message } from "../../components/Message";
import { errorActions } from "../../redux/reducers/error";

export function Posts() {
  const posts = useTypedSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  const [nextPage, setNextPage] = useState<string>();
  const [previousPage, setPreviousPage] = useState<string>();
  const error = useTypedSelector((state) => state.errorReducer);
  const sucess = useTypedSelector((state) => state.successReducer);

  function fetchPosts(path?: string) {
    postsService
      .fetchPaginated(path)
      .then(({ results, next, previous }) => {
        dispatch(postsActions.setPosts(results));
        setNextPage(next || undefined);
        setPreviousPage(previous || undefined);
      })
      .catch(() => dispatch(errorActions.setError(true)));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Header>CodeLeap Network</Header>
      <main id="main">
        <StyledPosts>
          {error && <Message error={true} />}
          {sucess && <Message error={false} />}
          <ul className="posts">
            <NewPost />
            {posts.map((post) => {
              return <PostCard {...post} key={post.id}></PostCard>;
            })}
          </ul>
          <div className="pagination">
            <StyledButton
              disabled={!previousPage}
              variant="primary"
              onClick={() => {
                fetchPosts(previousPage);
              }}
            >
              {" <-- Previous "}
            </StyledButton>
            <StyledButton
              disabled={!nextPage}
              variant="primary"
              onClick={() => {
                fetchPosts(nextPage);
              }}
            >
              {"Next -->"}
            </StyledButton>
          </div>
        </StyledPosts>
      </main>
    </>
  );
}

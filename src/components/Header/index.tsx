import { Link } from "react-router-dom";
import { StyledHeader } from "./StyledHeader";
import { THeader } from "./THeader";

export function Header({
  children,
  main = false,
  editable = false,
  onDelete,
  onEdit,
}: THeader) {
  return (
    <StyledHeader>
      {editable ? (
        <>
          <h2>{children}</h2>
          <div className="buttons">
            <button
              aria-label="delete post"
              onClick={() => {
                onDelete && onDelete();
              }}
            >
              <img src="/delete.svg" alt="" />
            </button>
            <button
              aria-label="edit post"
              onClick={() => {
                onEdit && onEdit();
              }}
            >
              <img src="/edit.svg" />
            </button>
          </div>
        </>
      ) : main ? (
        <Link to="/">
          <h1>{children}</h1>
        </Link>
      ) : (
        <h2>{children}</h2>
      )}
    </StyledHeader>
  );
}

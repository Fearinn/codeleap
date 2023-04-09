import { StyledHeader } from "./StyledHeader";
import { THeader } from "./THeader";

export function Header({
  children,
  editable = false,
  onDelete,
  onEdit,
}: THeader) {
  return (
    <StyledHeader>
      <h1>{children}</h1>
      {editable && (
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
      )}
    </StyledHeader>
  );
}

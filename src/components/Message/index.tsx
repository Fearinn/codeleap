import { ReactNode, useEffect } from "react";
import { StyledMessage } from "./StyledMessage";
import { useTypedDispatch } from "../../redux/hooks";
import { errorActions } from "../../redux/reducers/error";
import { successActions } from "../../redux/reducers/success";

export function Message({
  children,
  error,
}: {
  children?: ReactNode;
  error: boolean;
}) {
  if (error && !children)
    children = "Sorry, an unexpected error occurred! Please try again later";
  if (!error && !children) children = "Action succesfully completed!";

  const dispatch = useTypedDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(errorActions.setError(false));
      dispatch(successActions.setSuccess(false));
    }, 10000);
  }, []);
  return (
    <StyledMessage error={error} role="alert">
      {children}
    </StyledMessage>
  );
}

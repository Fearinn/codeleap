import { useState } from "react";
import { StyledButton } from "../../components/Button/StyledButton";
import { Modal } from "../../components/Modal";
import { StyledHome } from "./StyledHome";

export function Home() {
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");

  function closeModal() {
    setModal(false);
  }

  return (
    <StyledHome>
      <Modal
        title="Welcome to CodeLeap Network!"
        open={modal}
        onClose={closeModal}
        htmlId="sign_up-modal"
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            closeModal();
            alert(username);
          }}
        >
          <div className="username">
            <label htmlFor="username-input">Please enter your username</label>
            <input
              placeholder="John Doe"
              type="text"
              name="username"
              id="username-input"
              required
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <StyledButton
            active={!!username}
            disabled={!username}
            variant="primary"
            type="submit"
          >
            Enter
          </StyledButton>
        </form>
      </Modal>
      <h1>
        <img src="/codeleap_logo_black 1.svg" alt="CodeLeap"></img>
      </h1>
      <StyledButton
        variant="primary"
        type="button"
        onClick={() => setModal(true)}
      >
        Sign up
      </StyledButton>
    </StyledHome>
  );
}

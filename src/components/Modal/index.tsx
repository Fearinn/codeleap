import { useEffect, useRef } from "react";
import { StyledModal } from "./StyledModal";
import { TModal } from "./TModal";

export function Modal({ title, children, htmlId, onClose, open }: TModal) {
  const modalBoxRef = useRef<HTMLDivElement>(null);
  const modalBgRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: Event) => {
    if (
      event.target instanceof Node &&
      !modalBoxRef.current?.contains(event.target)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (modalBoxRef.current) {
      modalBoxRef.current.setAttribute("tabindex", "0");
      modalBoxRef.current.focus();
      modalBoxRef.current.addEventListener("focusout", (event) => {
        if (
          event.relatedTarget instanceof Node &&
          !modalBoxRef.current?.contains(event.relatedTarget)
        )
          modalBoxRef.current?.focus();
      });
    }

    modalBgRef.current?.addEventListener("click", handleClick);

    return () => {
      modalBgRef.current?.removeEventListener("click", handleClick);
    };
  }, [open]);

  return open ? (
    <StyledModal ref={modalBgRef}>
      <div
        className="box"
        ref={modalBoxRef}
        role="dialog"
        aria-labelledby={htmlId}
      >
        <header>
          <h2 id={htmlId}>{title}</h2>
          <button
            aria-label="close modal"
            type="button"
            onClick={() => onClose()}
          >
            X
          </button>
        </header>
        <main>{children}</main>
      </div>
    </StyledModal>
  ) : (
    <></>
  );
}

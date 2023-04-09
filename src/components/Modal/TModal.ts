import { ReactNode } from "react";

export type TModal = {
  open: boolean;
  title: string;
  children?: ReactNode;
  className?: string;
  htmlId: string;
  onClose: () => void;
};

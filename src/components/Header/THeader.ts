import { ReactNode } from "react";

export type THeader = {
  children: ReactNode;
  editable?: boolean;
  onDelete?: () => void;
  onEdit?: () => void;
};

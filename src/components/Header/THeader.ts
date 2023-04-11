import { ReactNode } from "react";

export type THeader = {
  children: ReactNode;
  main?: boolean;
  editable?: boolean;
  onDelete?: () => void;
  onEdit?: () => void;
};

export type TButton = {
  active?: boolean;
  variant: TButtonVariant;
};

export type TButtonVariant =
  | "primary"
  | "positive"
  | "negative"
  | "transparent";

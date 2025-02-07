export interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}

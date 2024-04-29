import * as S from "./Button.style";
import { EStyleThemeTypes } from "../../../styles/types";

export enum EButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface IStyledButtonProps {
  size: EButtonSize;
  color: EStyleThemeTypes;
  disabled?: boolean;
}

interface IButtonProps extends IStyledButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, size, color, disabled = false, onClick }: IButtonProps) => {
  return (
    <S.Button type="button" color={color} size={size} onClick={() => onClick?.()} disabled={disabled}>
      {label}
    </S.Button>
  );
};

export default Button;

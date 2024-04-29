import { useMemo } from "react";

import * as S from "./Checkbox.style";

export enum ECheckboxAlign {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export interface ICheckboxStyle {
  align?: ECheckboxAlign;
  gap?: number;
}
export interface ICheckbox extends ICheckboxStyle {
  label: string;
  value?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
}

const Checkbox = ({ label, value, defaultValue, disabled, align = ECheckboxAlign.HORIZONTAL, gap }: ICheckbox) => {
  const id = `checkbox${label}${Math.round(Math.random() * 100000)}`;
  const isChecked = useMemo(() => {
    return value;
  }, [value]);

  return (
    <S.Wrap htmlFor={id} align={align} gap={gap}>
      <S.Checkbox type={"checkbox"} id={id} disabled={disabled} {...(defaultValue ? { checked: isChecked } : { defaultChecked: isChecked })} />
      <S.Icon />
      <S.Label>{label}</S.Label>
    </S.Wrap>
  );
};

export default Checkbox;

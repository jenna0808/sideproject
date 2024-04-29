import { useMemo } from "react";

import * as S from "./Radio.style";

export enum ERadioAlign {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export interface IRadioStyle {
  align: ERadioAlign;
  gap?: number;
}

export interface IRadio extends IRadioStyle {
  id?: string;
  value?: boolean;
  defaultValue?: boolean;
  label: string;
  name?: string;
  disabled?: boolean;
}

const Radio = ({ value, defaultValue, name = "radio-group", label, align, gap = 8, ...rest }: IRadio) => {
  const id = `radio${label}${Math.round(Math.random() * 100000)}`;
  const isChecked = useMemo(() => {
    return value;
  }, [value]);

  return (
    <S.Wrap htmlFor={id} align={align} gap={gap}>
      <S.Radio
        type="radio"
        id={id}
        name={name}
        value={label}
        {...(defaultValue ? { checked: isChecked } : { defaultChecked: isChecked })}
        {...rest}
      />
      <S.Icon />
      <S.Label>{label}</S.Label>
    </S.Wrap>
  );
};

export default Radio;

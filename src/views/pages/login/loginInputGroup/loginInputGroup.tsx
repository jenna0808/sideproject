import * as S from "./loginInputGroup.style";
import { EStyleThemeTypes } from "../../../../styles/types";

import Input from "../../../../components/atom/input/Input";
import Button, { EButtonSize } from "../../../../components/atom/button/Button";

export interface IInputGroup {
  title: string;
  useButton?: boolean;
  defaultValue?: string;
  login?: string;
}

const InputGroup = ({ defaultValue = "", useButton = true, login }: IInputGroup) => {
  return (
    <S.Container>
      <Input defaultValue={defaultValue} />
      <Input defaultValue={defaultValue} />
      {useButton && <Button size={EButtonSize.LARGE} color={EStyleThemeTypes.PRIMARY} onClick={() => login} label={"Login"} />}
    </S.Container>
  );
};

export default InputGroup;

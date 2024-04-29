import * as S from "./loginInputGroup.style";
import { EStyleThemeTypes } from "../../../../styles/types";

import Input from "../../../../components/atom/input/Input";
import Button, { EButtonSize } from "../../../../components/atom/button/Button";
import { useNavigate } from "react-router-dom";

export interface ILoginInputGroup {
  useButton?: boolean;
  defaultValue?: string;
  ToMainPage?: () => void;
}

const navigate = useNavigate();
const ToMainPage = () => {
  return () => {
    navigate("/main/MainPage");
  };
};

const LoginInputGroup = ({ defaultValue = "", useButton = true, ToMainPage }: ILoginInputGroup) => {
  return (
    <S.Container>
      <Input defaultValue={defaultValue} />
      <Input defaultValue={defaultValue} />
      {useButton && <Button size={EButtonSize.LARGE} color={EStyleThemeTypes.PRIMARY} onClick={ToMainPage} label={"Login"} />}
    </S.Container>
  );
};

export default LoginInputGroup;

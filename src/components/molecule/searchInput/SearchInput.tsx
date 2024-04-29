import * as S from "./SearchInput.style";
import { EStyleThemeTypes } from "../../../styles/types";

import Input from "../../atom/input/Input";
import Button, { EButtonSize } from "../../atom/button/Button";

export interface ISearchInput {
  title: string;
  useButton?: boolean;
  buttonLabel?: string;
  defaultValue?: string;
  children?: React.ReactNode;
}

const SearchInput = ({ title, useButton = false, buttonLabel = "검색", defaultValue = "", children }: ISearchInput) => {
  return (
    <S.Container>
      <S.SearchLabel>{title}</S.SearchLabel>
      <Input defaultValue={defaultValue} />
      {useButton && <Button size={EButtonSize.MEDIUM} color={EStyleThemeTypes.PRIMARY} label={buttonLabel} />}
      {children}
    </S.Container>
  );
};

export default SearchInput;

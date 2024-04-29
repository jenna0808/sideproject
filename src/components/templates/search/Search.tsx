import * as S from "./Search.style";
import { EStyleThemeTypes } from "../../../styles/types";

import Button, { EButtonSize } from "../../atom/button/Button";

export interface ISearch {
  label: string;
  children?: React.ReactNode;
  onSearch?: () => void;
}

const Search = ({ children, label, onSearch }: ISearch) => {
  return (
    <S.Wrap>
      <S.Contents>
        {children}
        <S.SearchButtonArea>
          <Button color={EStyleThemeTypes.PRIMARY} size={EButtonSize.SMALL} onClick={() => onSearch} label={label} />
        </S.SearchButtonArea>
      </S.Contents>
    </S.Wrap>
  );
};

export default Search;

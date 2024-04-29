import { TabSet } from "@emotion/react";

import * as S from "./Tab.style";
import { EStyleThemeTypes } from "../../../styles/types";
import { tabs as tabStyles } from "../../../styles/tokens";

export interface ITabStyle {
  height?: number;
  isActive?: boolean;
  background?: string;
  borderBottom?: string;
  colors?: TabSet;
}
export interface ITab extends ITabStyle {
  label: string;
  color: EStyleThemeTypes;
  onClick?: () => void;
}

const Tab = ({ isActive, label, color = EStyleThemeTypes.PRIMARY, onClick, ...rest }: ITab) => {
  const colors = tabStyles;

  return (
    <S.Tab isActive={isActive} onClick={() => onClick?.()} colors={{ ...colors[color].inner }} {...rest}>
      <S.Label>{label}</S.Label>
    </S.Tab>
  );
};

export default Tab;

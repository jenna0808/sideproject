import React, { forwardRef } from "react";

import * as S from "./Tabs.style";
import { tabs as tabStyles } from "../../../styles/tokens";
import { EStyleIndex, EStyleThemeTypes } from "../../../styles/types";

import Tab, { ITabStyle } from "../../atom/tab/Tab";

export interface ITabs extends ITabsStyleProps {
  value: number;
  tabs: string[];
  color: EStyleThemeTypes;
  onChange?: (index: number) => void;
}

export enum ETablePosition {
  STICKY = "sticky",
  FIXED = "fixed",
  INITIAL = "initial",
}
export interface ITabsStyleProps extends ITabStyle {
  position?: ETablePosition;
  zIndex?: EStyleIndex | number;
  topGap?: number;
}

// eslint-disable-next-line react/display-name
const Tabs = forwardRef<HTMLDivElement, ITabs>(
  (
    { height = 40, position = ETablePosition.INITIAL, topGap = 0, zIndex = 0, value = 0, tabs = [], background = "", color, onChange },
    forwardedRef,
  ) => {
    const colors = tabStyles;

    return (
      <S.Container
        ref={forwardedRef}
        height={height}
        position={position}
        topGap={topGap}
        zIndex={zIndex}
        background={background}
        style={{ ...colors[color].outer }}
      >
        {tabs.map((val, idx) => (
          <Tab key={`tab-idx${idx}`} height={height} label={val} isActive={idx === value} onClick={() => onChange?.(idx)} color={color} />
        ))}
      </S.Container>
    );
  },
);

export default Tabs;

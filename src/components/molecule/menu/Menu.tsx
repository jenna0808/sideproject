import React from "react";

import * as S from "./Menu.style";

export enum EMenuPosition {
  STICKY = "sticky",
  FIXED = "fixed",
  INITIAL = "initial",
}

export interface IMenuStyleProps {
  width?: number;
  topGap?: number;
  position?: EMenuPosition;
}

export interface IMenu {
  title: string;
}

export interface IMenuProps extends IMenuStyleProps {
  title: string;
  menu: IMenu[];
  value?: number;
  onClick?: (value: number) => void;
  children?: React.ReactNode;
}

const Menu = ({ title, menu, width = 0, topGap = 0, value = 0, position = EMenuPosition.INITIAL, onClick, children }: IMenuProps) => {
  return (
    <S.Container width={width}>
      <S.Wrap position={position} topGap={topGap}>
        <S.Title>{title}</S.Title>
        <S.MenuGroup>
          {menu.map((item, idx) => (
            <S.Menu
              key={`menu-${idx}`}
              isActive={value === idx}
              onClick={() => {
                onClick?.(idx);
              }}
            >
              {item.title}
            </S.Menu>
          ))}
        </S.MenuGroup>
        {children}
      </S.Wrap>
    </S.Container>
  );
};

export default Menu;

import * as S from "./MenuLayout.style";

import Menu, { EMenuPosition, IMenuProps } from "../../molecule/menu/Menu";

interface IMenuLayout extends IMenuProps {
  topGap?: number;
  leftGap?: number;
  menuBg?: string;
}

const MenuLayout = ({
  title,
  menu = [],
  topGap = 0,
  leftGap = 0,
  menuBg = "",
  position = EMenuPosition.INITIAL,
  value = 0,
  onClick,
  children,
}: IMenuLayout) => {
  return (
    <S.Container topGap={topGap} menuBg={menuBg}>
      <Menu title={title} menu={menu} value={value} width={leftGap} topGap={topGap} position={position} onClick={onClick} />
      <S.Wrap leftGap={leftGap}>{children}</S.Wrap>
    </S.Container>
  );
};

export default MenuLayout;

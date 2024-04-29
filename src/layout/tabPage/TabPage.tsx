import { useState } from "react";

import * as S from "./TabPage.style";
import { haxColors } from "../../styles/tokens";
import { EStyleIndex, EStyleThemeTypes } from "../../styles/types";

import Tabs, { ETablePosition } from "../../components/molecule/tabs/Tabs";
import { EMenuPosition, IMenu } from "../../components/molecule/menu/Menu";
import Header, { TPosition } from "../../components/common/header/Header";
import MenuLayout from "../../components/templates/menuLayout/MenuLayout";

interface ITabPageProps {
  title?: string;
  menuTitle?: string;
  menu?: IMenu[];
  tabs?: string[];
  children: React.ReactNode;
  onTab?: (idx: number) => void;
}

const TabPage = ({ title = "Logo", menuTitle = "", menu = [], tabs = [], onTab, children }: ITabPageProps) => {
  const [index, changeIndex] = useState<number>(0);
  const [menuIdx, changeMenuIndex] = useState<number>(0);
  const user = { name: "Alice" };

  const onTabHandler = (idx: number) => {
    changeIndex(idx);
    onTab?.(idx);
  };

  return (
    <S.Container>
      <Header title={title} user={user} position={TPosition.FIXED} />
      <MenuLayout
        title={menuTitle}
        menu={menu}
        topGap={70}
        leftGap={200}
        menuBg={haxColors.gray100}
        position={EMenuPosition.INITIAL}
        value={menuIdx}
        onClick={val => {
          changeMenuIndex(val);
        }}
      >
        <Tabs
          tabs={tabs}
          value={index}
          color={EStyleThemeTypes.PRIMARY}
          background={haxColors.gray900}
          position={ETablePosition.INITIAL}
          topGap={69}
          zIndex={EStyleIndex["HEADER-TAB"]}
          onChange={onTabHandler}
        />
        <S.Wrap>{children}</S.Wrap>
      </MenuLayout>
    </S.Container>
  );
};

export default TabPage;

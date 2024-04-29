import React, { useState } from "react";

import * as S from "./SubPage.style";
import { haxColors } from "../../styles/tokens";

import { EMenuPosition, IMenu } from "../../components/molecule/menu/Menu";
import Header, { TPosition } from "../../components/common/header/Header";
import MenuLayout from "../../components/templates/menuLayout/MenuLayout";

interface ISubPageProps {
  menuTitle: string;
  menu?: IMenu[];
  children: React.ReactNode;
}

const SubPage = ({ menuTitle = "", menu = [], children }: ISubPageProps) => {
  const [menuIdx, changeMenuIndex] = useState<number>(0);
  const gnbMenu = ["Tab1", "Tab2", "Tab3", "Tab1", "Tab2", "Tab3"];

  return (
    <>
      <Header title="Logo" gnbMenu={gnbMenu} position={TPosition.FIXED} />
      <MenuLayout
        title={menuTitle}
        menu={menu}
        topGap={0}
        leftGap={200}
        menuBg={haxColors.gray100}
        position={EMenuPosition.STICKY}
        value={menuIdx}
        onClick={val => {
          changeMenuIndex(val);
        }}
      >
        <S.Container>{children}</S.Container>
      </MenuLayout>
    </>
  );
};

export default SubPage;

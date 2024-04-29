import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./RouterPage.style";
import { ITemplate } from "./types";

import templates from "./modules/templates";

const Templates = () => {
  const navigate = useNavigate();

  const onClickHandler = useCallback((menu: ITemplate) => {
    navigate(menu.label);
  }, []);

  return (
    <S.Container>
      <S.Title>프로젝트명</S.Title>
      <ul>
        {templates.map((menu, idx) => {
          return (
            <S.ListItem key={idx} onClick={() => onClickHandler(menu)}>
              {menu.label}
            </S.ListItem>
          );
        })}
      </ul>
    </S.Container>
  );
};

export default Templates;

import { useMemo } from "react";

import * as S from "./TableHeader.style";

export interface ITableHeader {
  title: string;
  marginTop?: number;
  marginBottom?: number;
  left?: React.ComponentType;
  right?: React.ComponentType;
}

const TableHeaderContents = ({ children }: React.PropsWithChildren) => {
  return <S.TableLabel>{children}</S.TableLabel>;
};

const TableHeader = ({ title, marginTop = 24, marginBottom = 10, left, right }: ITableHeader) => {
  const LeftContents = useMemo(() => {
    return left || TableHeaderContents;
  }, [left]);

  const RightContent = useMemo(() => {
    return right || TableHeaderContents;
  }, [right]);

  return (
    <S.TableHeader marginTop={marginTop} marginBottom={marginBottom}>
      <S.LeftArea>
        <S.TableTitle>{title}</S.TableTitle>
        <LeftContents />
      </S.LeftArea>
      <S.RightArea>
        <RightContent />
      </S.RightArea>
    </S.TableHeader>
  );
};

export default TableHeader;

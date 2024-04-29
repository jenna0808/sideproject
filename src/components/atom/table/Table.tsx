import * as S from "./Table.style";

import { IListData } from "../../molecule/list/List";

export enum ETableHAlign {
  CENTER = "center",
  LEFT = "left",
  RIGHT = "right",
}

export enum ETableVAlign {
  CENTER = "center",
  TOP = "top",
  BOTTOM = "bottom",
}

export enum ETableLayout {
  FIXED = "fixed",
  AUTO = "auto",
}

export interface ITableData {
  title?: string;
  desc?: string;
  size?: string;
}

export interface ITable {
  data?: IListData[];
  width?: number;
  marginTop?: number;
  children?: React.ReactNode;
}

interface ITBody {
  children: React.ReactNode;
}

interface ITR {
  children: React.ReactNode;
}

interface ITH {
  width?: string;
  children?: React.ReactNode;
}

interface ITD {
  width?: string;
  children?: React.ReactNode;
}

export const TBody = ({ children }: ITBody) => {
  return <S.TBody>{children}</S.TBody>;
};

export const TR = ({ children }: ITR) => {
  return <S.TR>{children}</S.TR>;
};

export const TH = ({ width, children }: ITH) => {
  return <S.TH width={width}>{children}</S.TH>;
};

export const TD = ({ width, children }: ITD) => {
  return <S.TD width={width}>{children}</S.TD>;
};

const Table = ({ data = [], width, marginTop, children }: ITable) => {
  return (
    <S.Container width={width} marginTop={marginTop}>
      <S.Table>
        {!!data.length && (
          <TBody>
            {data.map((item, itemIdx) => (
              <TR key={itemIdx}>
                {item.list.map((value, idx) => (
                  <TD key={`table-header-${idx}`}>{value.desc}</TD>
                ))}
              </TR>
            ))}
          </TBody>
        )}
        {children}
      </S.Table>
    </S.Container>
  );
};

export default Table;

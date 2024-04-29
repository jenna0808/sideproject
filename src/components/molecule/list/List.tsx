import * as S from "../../atom/table/Table.style";

import { ITableData, TBody, TD, TH, TR, ETableLayout } from "../../atom/table/Table";

export interface IListData {
  list: ITableData[];
}

export interface IListProps {
  height?: number;
  header?: IListData[];
  body?: IListData[];
  tableLayout?: ETableLayout;
  children?: React.ReactNode;
}

export interface IList extends IListProps {
  width?: number;
  marginTop?: number;
}

export const ListHeader = ({ header = [], height, children }: IListProps) => {
  return (
    <S.ListHeader height={height}>
      <S.Table>
        {!!header.length && (
          <S.THead>
            {header.map((data, index) => (
              <TR key={index}>
                {data.list.map((item, itemIdx) => (
                  <TH key={`list-header-${itemIdx}`}>{item.title}</TH>
                ))}
              </TR>
            ))}
          </S.THead>
        )}
        {children}
      </S.Table>
    </S.ListHeader>
  );
};

export const ListBody = ({ body = [], header = [], height, tableLayout, children }: IListProps) => {
  return (
    <S.ListBody height={height}>
      <S.Table tableLayout={tableLayout}>
        {tableLayout && !!header.length && (
          <S.THead>
            {header.map((data, index) => (
              <TR key={index}>
                {data.list.map((item, itemIdx) => (
                  <TH key={`list-header-${itemIdx}`} width={item.size}>
                    {item.title}
                  </TH>
                ))}
              </TR>
            ))}
          </S.THead>
        )}
        {!!body.length && (
          <TBody>
            {body.map((data, index) => (
              <TR key={index}>
                {data.list.map((item, itemIdx) => (
                  <TD key={`list-header-${itemIdx}`} width={item.size}>
                    {item.desc}
                  </TD>
                ))}
              </TR>
            ))}
          </TBody>
        )}
        {children}
      </S.Table>
    </S.ListBody>
  );
};

const List = ({ width, height, header = [], body = [], tableLayout, marginTop, children }: IList) => {
  return tableLayout ? (
    <S.List width={width} marginTop={marginTop}>
      {!!body.length && <ListBody header={header} body={body} height={height} tableLayout={tableLayout} />}
      {children}
    </S.List>
  ) : (
    <S.List width={width} marginTop={marginTop}>
      {!!header.length && <ListHeader header={header} />}
      {!!body.length && <ListBody body={body} height={height} />}
      {children}
    </S.List>
  );
};

export default List;

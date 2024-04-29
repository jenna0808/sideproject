import React from "react";

import Table, { TBody, TD, TH, TR } from "../../../components/atom/table/Table";
import { IListData } from "../../../components/molecule/list/List";
import SearchInput from "../../../components/molecule/searchInput/SearchInput";

interface ITableFormProps {
  data: IListData[];
}

const TableForm = ({ data = [] }: ITableFormProps) => {
  return (
    <Table>
      <TBody>
        {data.map((item, itemIdx) => (
          <TR key={itemIdx}>
            {item.list.map((value, idx) => (
              <React.Fragment key={`table-header-${idx}`}>
                <TH width={value.size}>{value.title}</TH>
                <TD width={"auto"}>
                  <SearchInput defaultValue={value.desc} title={""} />
                </TD>
              </React.Fragment>
            ))}
          </TR>
        ))}
      </TBody>
    </Table>
  );
};

export default TableForm;

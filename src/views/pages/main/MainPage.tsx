import { EStyleThemeTypes } from "../../../styles/types";

import Button, { EButtonSize } from "../../../components/atom/button/Button";
import { ETableLayout } from "../../../components/atom/table/Table";
import Grid, { GridItem } from "../../../components/molecule/grid/Grid";
import SearchInput from "../../../components/molecule/searchInput/SearchInput";
import List from "../../../components/molecule/list/List";
import TableHeader from "../../../components/templates/tableHeader/TableHeader";
import Search from "../../../components/templates/search/Search";
import DefaultPage from "../../../layout/defaultPage/DefaultPage";
import { mockTableBodyData, mockTableHeaderData } from "../../templates/mocks/sample";

const SampleTableHeader = () => {
  return <Button color={EStyleThemeTypes.PRIMARY} label={"Link"} size={EButtonSize.SMALL} />;
};

const MainPage = () => {
  return (
    <DefaultPage>
      {/* eslint-disable-next-line @typescript-eslint/no-empty-function*/}
      <Search onSearch={() => {}} label={"Search"}>
        <Grid col={3} colGap={20} rowGap={10}>
          <GridItem>
            <SearchInput title="Title" useButton defaultValue="test" />
          </GridItem>
          <GridItem>
            <SearchInput title="Title" useButton />
          </GridItem>
          <GridItem>
            <SearchInput title="Title" useButton />
          </GridItem>
          <GridItem>
            <SearchInput title="Title" />
          </GridItem>
        </Grid>
      </Search>
      <TableHeader title={"Sub Title"} right={SampleTableHeader} />
      <List header={mockTableHeaderData} body={mockTableBodyData} height={200} />
      <TableHeader title={"Sub Title"} right={SampleTableHeader} />
      <List header={mockTableHeaderData} body={mockTableBodyData} height={200} tableLayout={ETableLayout.FIXED} />
      <TableHeader title={"Sub Title"} />
      <List body={mockTableBodyData} height={200} tableLayout={ETableLayout.FIXED} />
    </DefaultPage>
  );
};

export default MainPage;

import { useState } from "react";

import * as S from "./SamplePage.style";
import { EStyleThemeTypes } from "../../../styles/types";

import Checkbox, { ECheckboxAlign } from "../../../components/atom/checkbox/Checkbox";
import Radio, { ERadioAlign } from "../../../components/atom/radio/Radio";
import { ETableLayout } from "../../../components/atom/table/Table";
import Button, { EButtonSize } from "../../../components/atom/button/Button";
import SearchInput from "../../../components/molecule/searchInput/SearchInput";
import List from "../../../components/molecule/list/List";
import Grid, { GridItem } from "../../../components/molecule/grid/Grid";
import Tabs from "../../../components/molecule/tabs/Tabs";
import TableForm from "../../templates/sample/TableForm";
import TableHeader from "../../../components/templates/tableHeader/TableHeader";
import Search from "../../../components/templates/search/Search";
import TabPage from "../../../layout/tabPage/TabPage";
import {
  menuMock,
  menuTitleMock,
  mockTableBodyData,
  mockTableFormData,
  mockTableFormData2,
  mockTableHeaderData,
  tabMock,
  tabMock2,
} from "../../templates/mocks/sample";

const SampleTableHeader = () => {
  return <Button color={EStyleThemeTypes.PRIMARY} label="Link" size={EButtonSize.SMALL} />;
};

const SamplePage = () => {
  const [index, changeIndex] = useState(0);
  const [tabIndex, changeTabIndex] = useState(0);

  const onTabHandler = (idx: number) => {
    changeIndex(idx);
  };

  return (
    <TabPage menuTitle={menuTitleMock} menu={menuMock} tabs={tabMock} onTab={onTabHandler}>
      <S.Container>
        {index === 0 && (
          <>
            {/* Sample Page */}
            {/*eslint-disable-next-line @typescript-eslint/no-empty-function*/}
            <Search onSearch={() => {}} label="Search">
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
            <TableHeader title="Sub Title" right={SampleTableHeader} />
            <List header={mockTableHeaderData} body={mockTableBodyData} height={200} />
            <TableHeader title="Sub Title" right={SampleTableHeader} />
            <List header={mockTableHeaderData} body={mockTableBodyData} height={200} tableLayout={ETableLayout.FIXED} />
            <TableHeader title="Sub Title" />
            <List body={mockTableBodyData} height={200} tableLayout={ETableLayout.FIXED} />
          </>
        )}

        {index === 1 && (
          <>
            {/* Sample Page */}
            <TableHeader title="Sub Title" right={SampleTableHeader} />
            <TableForm data={mockTableFormData} />

            <TableHeader title="Sub Title" right={SampleTableHeader} />
            <Grid>
              <TableForm data={mockTableFormData2} />
              <TableForm data={mockTableFormData2} />
            </Grid>
          </>
        )}

        {index === 2 && (
          <>
            {/* Sample Page */}
            <TableHeader title="Sub Title" right={SampleTableHeader} />
            <Grid>
              <List header={mockTableHeaderData} body={mockTableBodyData} height={200} />
              <List header={mockTableHeaderData} body={mockTableBodyData} height={200} />
              <List header={mockTableHeaderData} body={mockTableBodyData} height={200} />
              <List header={mockTableHeaderData} body={mockTableBodyData} height={200} />
            </Grid>

            <TableHeader title="Sub Title" right={SampleTableHeader} />
            <Grid rowGap={10}>
              <List header={mockTableHeaderData} body={mockTableBodyData} height={200} />
              <List header={mockTableHeaderData} body={mockTableBodyData} height={200} />
              <List header={mockTableHeaderData} body={mockTableBodyData} height={200} />
              <List header={mockTableHeaderData} body={mockTableBodyData} height={200} />
            </Grid>

            <Grid col={3}>
              <GridItem>
                <TableHeader title="Sub Title" />
                <List header={mockTableHeaderData} body={mockTableBodyData} height={200} tableLayout={ETableLayout.FIXED} />
              </GridItem>
              <GridItem>
                <TableHeader title="Sub Title" />
                <List header={mockTableHeaderData} body={mockTableBodyData} height={200} tableLayout={ETableLayout.FIXED} />
              </GridItem>
              <GridItem>
                <TableHeader title="Sub Title" />
                <TableForm data={mockTableFormData2} />
              </GridItem>
              <GridItem>
                <TableHeader title="Sub Title" />
                <TableForm data={mockTableFormData2} />
              </GridItem>
            </Grid>
          </>
        )}

        {index === 3 && (
          <>
            <TableHeader title="Sub Title" />
            <Radio label="Radio" align={ERadioAlign.HORIZONTAL} value />
            <Radio label="Radio" align={ERadioAlign.HORIZONTAL} />
            <Radio label="Radio" align={ERadioAlign.HORIZONTAL} disabled />

            <TableHeader title="Sub Title" />
            <Radio label="Radio1" align={ERadioAlign.VERTICAL} value />
            <Radio label="Radio1" align={ERadioAlign.VERTICAL} />
            <Radio label="Radio1" align={ERadioAlign.VERTICAL} disabled />
          </>
        )}

        {index === 4 && (
          <>
            <TableHeader title="Sub Title" />
            <Checkbox label="Checkbox" value={true} />
            <Checkbox label="Checkbox" />
            <Checkbox label="Checkbox" disabled gap={15} />

            <TableHeader title="Sub Title" />
            <Checkbox label="Checkbox" value={true} align={ECheckboxAlign.VERTICAL} />
            <Checkbox label="Checkbox" align={ECheckboxAlign.VERTICAL} />
            <Checkbox label="Checkbox" disabled gap={15} align={ECheckboxAlign.VERTICAL} />
          </>
        )}

        {index === 5 && (
          <>
            <Button color={EStyleThemeTypes.PRIMARY} label="Link" size={EButtonSize.SMALL} />
            <br />
            <br />
            <Button color={EStyleThemeTypes.SECONDARY} label="Link" size={EButtonSize.MEDIUM} />
            <br />
            <br />
            {/*eslint-disable-next-line @typescript-eslint/no-empty-function*/}
            <Button color={EStyleThemeTypes.SECONDARY} label="Link" size={EButtonSize.LARGE} disabled />
          </>
        )}

        {index === 6 && (
          <>
            <Tabs tabs={tabMock2} value={tabIndex} color={EStyleThemeTypes.PRIMARY} onChange={changeTabIndex} />
            <br />
            <br />
            <Tabs tabs={tabMock2} value={tabIndex} color={EStyleThemeTypes.SECONDARY} onChange={changeTabIndex} />
          </>
        )}
      </S.Container>
    </TabPage>
  );
};

export default SamplePage;

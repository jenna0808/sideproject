export const menuTitleMock = "Title";
export const menuMock = [
  {
    title: "menu 1",
  },
  {
    title: "menu 2",
  },
];

export const tabMock = ["List", "Form", "Grid", "Radio", "Checkbox", "Button", "Tabs"];

export const tabMock2 = ["Tab1", "Tab2", "Tab3"];

const mockData = {
  title: "Title",
  desc: "Desc",
  size: "180px",
};

const mockData2 = {
  title: "Title",
  desc: "Desc",
  size: "120px",
};

export const mockTableData = Array(8).fill(mockData);

export const mockTableFormData = Array(3).fill({
  list: Array(3).fill(mockData),
});

export const mockTableFormData2 = Array(3).fill({
  list: Array(1).fill(mockData2),
});

export const mockTableHeaderData = [
  {
    list: mockTableData,
  },
];

export const mockTableBodyData = Array(10).fill({
  list: mockTableData,
});

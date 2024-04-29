import styled from "@emotion/styled";

import { ETableHAlign, ETableLayout, ETableVAlign } from "./Table";
import { haxColors } from "../../../styles/tokens";

export const Container = styled.div<{ width?: number; underline?: boolean; marginTop?: number }>`
  ${({ width }) => width && `width: ${width}px;`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
		${({ underline = true }) =>
    underline &&
    `
			border-left: 1px solid ${haxColors.gray500};
			border-top: 2px solid ${haxColors.gray900};
		`}
`;

export const List = styled.div<{ width?: number; underline?: boolean; marginTop?: number }>`
  ${({ width }) => width && `width: ${width}px;`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
		${({ underline = true }) =>
    underline &&
    `
			border: 1px solid ${haxColors.gray500};
			border-top: 2px solid ${haxColors.gray900};
		`}
`;

export const ListHeader = styled.div<{ height?: number }>`
  width: 100%;
  ${({ height }) => height && `height: ${height}px;`}
  background: ${haxColors.gray100};
  overflow-y: scroll;
`;

export const ListBody = styled.div<{ height?: number }>`
  width: 100%;
  overflow-y: scroll;

  ${({ height }) => height && `height: ${height}px;`}
`;

export const Table = styled.table<{ tableLayout?: ETableLayout }>`
  width: 100%;

  ${({ tableLayout }) =>
    tableLayout &&
    `
			table-layout: ${tableLayout};
		`}
`;

export const THead = styled.thead``;

export const TBody = styled.tbody`
  & th {
    vertical-align: middle;
  }
`;

export const TR = styled.tr``;

export const TH = styled.th<{ width?: string; fontWeight?: number; hAlign?: ETableHAlign; vAlign?: ETableVAlign }>`
  ${({ width }) => width && `width: ${width};`}

  border-right: 1px solid ${haxColors.gray500};
  border-bottom: 1px solid ${haxColors.gray500};
  font-size: 12px;
  font-weight: ${({ fontWeight = 400 }) => fontWeight};
  color: ${haxColors.gray800};
  padding: 11px;
  background: ${haxColors.gray100};
  text-align: ${({ hAlign = "left" }) => hAlign};
  vertical-align: ${({ vAlign = "middle" }) => vAlign};
`;

export const TD = styled.td<{ width?: string; hAlign?: ETableHAlign; vAlign?: ETableVAlign }>`
  ${({ width }) => width && `width: ${width};`}

  border-right: 1px solid ${haxColors.gray500};
  border-bottom: 1px solid ${haxColors.gray500};
  padding: 11px;
  color: ${haxColors.gray200};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: ${({ hAlign = "left" }) => hAlign};
  vertical-align: ${({ vAlign = "middle" }) => vAlign};
  white-space: pre-line;
`;

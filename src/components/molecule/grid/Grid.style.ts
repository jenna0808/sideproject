import styled from "@emotion/styled";

import { IStyledGrid } from "./Grid";

export const Grid = styled.div<IStyledGrid>`
  display: flex;
  flex-wrap: wrap;

  ${({ width }) => width && `width: ${width};`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
  ${({ colAlign = 1 }) =>
    colAlign &&
    `
			justify-content: ${colAlign};
		`}

  > div {
    display: inline-flex;
    flex-direction: column;
    ${({ grow = "1" }) =>
      grow &&
      `
				flex-grow: ${grow};
			`}

    ${({ col = 2, colGap = 10, rowGap = 0 }) => `
				width: calc(${Math.trunc(100 / col)}% - ${Math.round(colGap / col)}px);
				width: -webkit-calc(${Math.trunc(100 / col)}% - ${Math.round(colGap / col)}px);
				padding-left: ${colGap}px;
				margin-top: ${rowGap}px;
				
				&:nth-of-type(${col}n + 1) {
					padding-left: 0;
					white-space: normal;
				}`}
  }
`;

export const GridItem = styled.div<{ width?: string; marginTop?: number }>`
  ${({ width }) => width && `width: ${width};`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
`;

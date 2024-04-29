import styled from "@emotion/styled";

import { ITabStyle } from "./Tab";

export const Tab = styled.div<ITabStyle>`
  display: inline-flex;
  min-width: 100px;
  height: ${({ height }) => height}px;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  ${({ colors }) => colors?.normal}
  ${({ isActive = false, colors }) => isActive && colors?.selected}
`;

export const Label = styled.span`
  font-size: 12px;
  white-space: pre-line;
`;

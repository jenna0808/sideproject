import styled from "@emotion/styled";

import { haxColors } from "../../../styles/tokens";

export const Container = styled.div<{ topGap?: number; menuBg?: string }>`
  display: flex;
  margin-top: 57px;
  min-height: calc(100vh - ${({ topGap = 0 }) => topGap}px);
`;

export const Wrap = styled.div<{ leftGap?: number }>`
  width: calc(100% - ${({ leftGap = 0 }) => leftGap}px);
  color: ${haxColors.gray300};
`;

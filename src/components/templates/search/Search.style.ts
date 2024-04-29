import styled from "@emotion/styled";

import { haxColors } from "../../../styles/tokens";

export const Wrap = styled.div`
  padding: 0 15px 15px;
  background: ${haxColors.gray500};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top: 2px solid ${haxColors.gray900};
`;

export const Contents = styled.div`
  position: relative;
`;

export const SearchButtonArea = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: right;
`;

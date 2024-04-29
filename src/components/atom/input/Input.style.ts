import styled from "@emotion/styled";

import { haxColors } from "../../../styles/tokens";

export const Wrap = styled.span`
  display: block;
  align-items: center;

  width: 100%;
  height: 48px;
  min-width: 50px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  font-size: 16px;
  border-radius: 8px;
  border: ${haxColors.gray500} 1px solid;
  padding: 0 20px;
  background: ${haxColors.white};

  :hover :active {
    border: 0;
  }
`;

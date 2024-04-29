import styled from "@emotion/styled";

import { haxColors } from "../../../styles/tokens";

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 15px 10px;
  background: ${haxColors.gray800};
`;

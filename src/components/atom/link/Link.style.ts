import styled from "@emotion/styled";
// import { css } from "@emotion/react";

import { IStyledLinkProps } from "./Link";
import { haxColors } from "../../../styles/tokens";

export const Links = styled.a<IStyledLinkProps>`
  color: ${haxColors.black};
  text-decoration: none !important;
  &:hover {
    color: ${haxColors.primaryHover};
  }
`;

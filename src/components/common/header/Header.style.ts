import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { TPosition } from "./Header";
import { haxColors } from "../../../styles/tokens";
import { EStyleIndex } from "../../../styles/types";

export const Header = styled.header<{ position: TPosition }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 15px 10px;
  background: ${haxColors.gray800};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

  ${({ position }) => {
    switch (position) {
      case TPosition.FIXED:
        return css`
          position: fixed;
          top: 0;
          z-index: ${EStyleIndex.HEADER};
        `;
      case TPosition.STICKY:
        return css`
          position: sticky;
          top: 0;
          z-index: ${EStyleIndex.HEADER};
        `;
    }
  }}
`;

export const HeaderLogo = styled.h1`
  vertical-align: top;

  color: ${haxColors.white};
  font-size: 20px;
  font-weight: 700;
`;

export const GnbMenu = styled.ul`
  display: flex;
  gap: 10px;

  a {
    outline: none;
  }
`;

export const HeaderButton = styled.div`
  color: ${haxColors.white};
  font-size: 20px;
  font-weight: 700;
`;

export const UserInfo = styled.span`
  margin-right: 10px;

  color: ${haxColors.gray300};
  font-size: 14px;
`;

export const UserName = styled.b``;

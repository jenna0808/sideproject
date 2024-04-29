import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { EMenuPosition, IMenuStyleProps } from "./Menu";
import { haxColors } from "../../../styles/tokens";
import { EStyleIndex } from "../../../styles/types";

export const Container = styled.aside<IMenuStyleProps>`
  width: ${({ width }) => width}px;
  height: inherit;
  position: relative;
  background-color: #f0f0f0;
`;

export const Wrap = styled.div<IMenuStyleProps>`
  ${({ position = "initial", topGap = 0 }) => {
    switch (position) {
      case EMenuPosition.FIXED:
        return css`
          position: fixed;
          top: ${topGap}px;
          z-index: ${EStyleIndex.GNB};
        `;
      case EMenuPosition.STICKY:
        return css`
          position: sticky;
          top: ${topGap}px;
          z-index: ${EStyleIndex.GNB};
        `;
      case EMenuPosition.INITIAL:
        return css`
          display: block;
        `;
    }
  }}
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${haxColors.gray300};
  height: 80px;
`;

export const MenuGroup = styled.ul`
  display: block;
`;

export const Menu = styled.li<{ isActive?: boolean }>`
  display: block;
  color: ${haxColors.gray300};
  ${({ isActive }) =>
    isActive &&
    `
			background: ${haxColors.gray500};
		`}
  padding: 10px;
  cursor: pointer;
`;

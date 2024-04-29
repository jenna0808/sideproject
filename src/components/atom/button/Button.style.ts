import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { IStyledButtonProps } from "./Button";
import { EButtonSize } from "./Button";
import { EStyleThemeTypes } from "../../../styles/types";
import { haxColors } from "../../../styles/tokens";

export const Button = styled.button<IStyledButtonProps>`
  min-width: 50px;
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  ${({ color }) => {
    switch (color) {
      case EStyleThemeTypes.PRIMARY:
        return css`
          color: ${haxColors.white};
          background: ${haxColors.primary};
          &hover {
            background: ${haxColors.primaryHover};
          }
        `;
      case EStyleThemeTypes.SECONDARY:
        return css`
          color: ${haxColors.white};
          background: ${haxColors.gray300};
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case EButtonSize.SMALL:
        return css`
          height: 40px;
          font-size: 14px;
          line-height: 40px;
          border-radius: 4px;
        `;
      case EButtonSize.MEDIUM:
        return css`
          height: 44px;
          font-size: 16px;
          line-height: 44px;
          border-radius: 8px;
        `;
      case EButtonSize.LARGE:
        return css`
          height: 52px;
          font-size: 20px;
          line-height: 52px;
          border-radius: 8px;
        `;
    }
  }}
`;

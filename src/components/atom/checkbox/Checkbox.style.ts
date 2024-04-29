import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { haxColors } from "../../../styles/tokens";
import { ECheckboxAlign, ICheckboxStyle } from "./Checkbox";

export const Wrap = styled.label<ICheckboxStyle>`
  position: relative;
  cursor: pointer;

  ${({ align, gap = 8 }) => {
    switch (align) {
      case ECheckboxAlign.HORIZONTAL:
        return css`
          display: inline-block;
          margin-right: ${gap}px;
        `;
      case ECheckboxAlign.VERTICAL:
        return css`
          display: block;
          margin-bottom: ${gap}px;
        `;
    }
  }}
`;

export const Checkbox = styled.input`
  vertical-align: middle;
  padding: 0;
  margin: 0;

  &:checked + span {
    background: ${haxColors.blue500};
  }
  &:disabled + span {
    background: ${haxColors.gray500};
    cursor: default;
  }

  &:disabled {
    &:checked + span {
      background: ${haxColors.gray500};
    }
  }
`;

export const Icon = styled.span`
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 0;

  width: 16px;
  height: 16px;
  margin-top: -8px;
  background: ${haxColors.gray800};

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;

    width: 8px;
    height: 4px;
    margin-top: -4px;
    margin-left: -4px;
    border-left: 1px solid ${haxColors.white};
    border-bottom: 1px solid ${haxColors.white};
    transform: rotate(-45deg);
  }
`;

export const Label = styled.span`
  display: inline-block;

  margin-left: 8px;

  font-size: 12px;
  white-space: pre-line;
`;

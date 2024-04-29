import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { haxColors } from "../../../styles/tokens";
import { ERadioAlign, IRadioStyle } from "./Radio";

export const Wrap = styled.label<IRadioStyle>`
  position: relative;

  cursor: pointer;

  ${({ align, gap }) => {
    switch (align) {
      case ERadioAlign.HORIZONTAL:
        return css`
          display: inline-block;
          margin-right: ${gap}px;
        `;
      case ERadioAlign.VERTICAL:
        return css`
          display: block;
          margin-bottom: ${gap}px;
        `;
    }
  }}
`;

export const Radio = styled.input`
  margin: 0;

  &:checked + span {
    background: ${haxColors.blue500};
  }

  &:disabled + span {
    background: ${haxColors.gray500};
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
  border-radius: 50%;
  background: ${haxColors.gray800};

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    margin-left: -4px;
    background: ${haxColors.white};
    border-radius: 50%;
  }
`;

export const Label = styled.span`
  margin-left: 8px;
  font-size: 12px;
  white-space: pre-line;
`;

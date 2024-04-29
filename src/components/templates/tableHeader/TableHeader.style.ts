import styled from "@emotion/styled";

import { haxColors } from "../../../styles/tokens";

export const TableHeader = styled.div<{ marginTop?: number; marginBottom?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
`;

export const LeftArea = styled.div`
  display: flex;
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
`;

export const TableTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${haxColors.gray300};
`;

export const TableLabel = styled.div`
  display: flex;
`;

export const Button = styled.button`
  height: 26px;
  min-width: 50px;
  background: ${haxColors.blueGray600};
  border-radius: 3px;
  border: 0;
  color: ${haxColors.white};

  & + * {
    margin-left: 5px;
  }
`;

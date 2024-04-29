import { haxColors } from "../../../styles/tokens"; // @/styles/tokens
import styled from "@emotion/styled";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const SearchLabel = styled.span`
  display: inline-block;
  min-width: 50px;
  font-size: 13px;
  color: ${haxColors.gray300};

  & + * {
    margin-left: 5px;
  }
`;

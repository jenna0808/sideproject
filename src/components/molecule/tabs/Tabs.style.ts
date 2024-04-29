import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { ETablePosition, ITabsStyleProps } from "./Tabs";

export const Container = styled.nav<ITabsStyleProps>`
  ${({ background }) => background && `background: ${background};`}
  height: ${({ height }) => height}px;

  ${({ position = ETablePosition.INITIAL, topGap = 0, zIndex = 0 }) => {
    switch (position) {
      case ETablePosition.STICKY:
        return css`
          position: sticky;
          top: ${topGap}px;
          z-index: ${zIndex};
        `;
      case ETablePosition.FIXED:
        return css`
          position: fixed;
          top: ${topGap}px;
          z-index: ${zIndex};
        `;
    }
  }}
`;

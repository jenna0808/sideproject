import * as S from "./Grid.style";

export enum EColAlign {
  CENTER = "center",
  SPACE_BETWEEN = "space-between",
  NONE = "none",
}

export interface IStyledGrid {
  width?: string;
  marginTop?: number;
  col?: number;
  colGap?: number;
  rowGap?: number;
  grow?: string;
  colAlign?: EColAlign;
}

interface IGrid extends IStyledGrid {
  children: React.ReactNode;
}

export const GridItem = ({ width, marginTop, children }: IGrid) => {
  return (
    <S.GridItem width={width} marginTop={marginTop}>
      {children}
    </S.GridItem>
  );
};

const Grid = ({ children, ...rest }: IGrid) => {
  return <S.Grid {...rest}>{children}</S.Grid>;
};

export default Grid;

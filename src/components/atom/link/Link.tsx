import * as S from "./Link.style";

export interface IStyledLinkProps {
  children: React.ReactNode;
}

interface ILinkProps extends IStyledLinkProps {
  href: string;
}

const Link = ({ href, children }: ILinkProps) => {
  return <S.Links href={href}>{children}</S.Links>;
};

export default Link;

import * as S from "./Header.style";
import { EStyleThemeTypes } from "../../../styles/types";

import Button, { EButtonSize } from "../../atom/button/Button";

export enum TPosition {
  STICKY = "sticky",
  FIXED = "fixed",
  INITIAL = "initial",
}

type TUser = {
  name: string;
};

interface HeaderProps {
  position: TPosition;
  gnbMenu?: string[];
  title?: string;
  user?: TUser;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const Header = ({ title = "", user, position, gnbMenu, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
  return (
    <S.Header position={position}>
      <S.HeaderLogo>{title}</S.HeaderLogo>
      {gnbMenu && (
        <S.GnbMenu>
          {gnbMenu.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </S.GnbMenu>
      )}
      <S.HeaderButton>
        {user ? (
          <>
            <S.UserInfo>
              Welcome, <S.UserName>{user.name}</S.UserName>!
            </S.UserInfo>
            <Button size={EButtonSize.SMALL} color={EStyleThemeTypes.SECONDARY} onClick={() => onLogout?.()} label="Log out" />
          </>
        ) : (
          <>
            <Button size={EButtonSize.SMALL} color={EStyleThemeTypes.SECONDARY} onClick={() => onLogin?.()} label="Log in" />
            <Button color={EStyleThemeTypes.PRIMARY} size={EButtonSize.SMALL} onClick={() => onCreateAccount?.()} label="Sign up" />
          </>
        )}
      </S.HeaderButton>
    </S.Header>
  );
};

export default Header;

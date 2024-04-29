import * as S from "./DefaultPage.style";

import Header, { TPosition } from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";

interface IDefaultPage {
  children: React.ReactNode;
}

const DefaultPage = ({ children }: IDefaultPage) => {
  return (
    <>
      <Header title="title" position={TPosition.FIXED} />
      <S.Container>{children}</S.Container>
      <Footer />
    </>
  );
};

export default DefaultPage;

/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./LoginPage.style";

import Link from "../../../components/atom/link/Link";
import LoginInputGroup from "./loginInputGroup/loginInputGroup";
import Layout from "../../../layout/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <S.Container>
        <S.Brand>
          <p>My</p>
          Diary
        </S.Brand>
        <LoginInputGroup useButton title={""} />
        <S.Signin>
          <Link href={""}>Sign in</Link>
        </S.Signin>
      </S.Container>
      {/* eslint-disable-next-line @typescript-eslint/no-empty-function*/}
    </Layout>
  );
};

export default LoginPage;

import styled from "@emotion/styled";

export interface ILayout {
  children?: React.ReactNode;
}

export const Container = styled.div`
  width: 100%;
  padding: 0 24px;
`;

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

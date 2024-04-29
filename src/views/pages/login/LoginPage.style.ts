import styled from "@emotion/styled";
// import { css } from "@emotion/react";

import { haxColors } from "../../../styles/tokens";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
  width: 100%;
  height: 100vh;
  color: ${haxColors.black};
  padding: 0 0 90px 0;
`;

export const Signin = styled.div`
  display: block;
  width: 100%;

  font-size: 14px;
  padding: 30px 0 0 0;
`;

export const Brand = styled.h1`
  display: block;
  width: 100%;
  font-size: 45px;
  font-weight: 700;
  margin: 0 0 100px 0;
  p {
    font-weight: 300;
  }
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-flow: column;

  padding: 30px;
`;

export const Title = styled.h1`
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  margin-bottom: 10px;

  font-size: 30px;
`;

export const ListItem = styled.li`
  height: 45px;
  border-radius: 4px;
  border: 1px solid black;
  padding: 0px 10px;
  margin: 5px;

  line-height: 45px;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

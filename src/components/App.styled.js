import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  gap: 16px;
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: 16px auto;
  padding: 16px;
  color: var(--dark-color);
  background-color: var(--light-color);
`;

export const Caption = styled.h2`
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 500;
`;

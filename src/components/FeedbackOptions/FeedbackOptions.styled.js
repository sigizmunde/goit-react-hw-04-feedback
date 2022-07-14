import styled from "styled-components";

export const Panel = styled.div`
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 8px;
`;

export const Button = styled.button`
  margin: 0;
  padding: 8px;
  color: var(--light-color);
  background-color: var(--dark-color);
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: var(--dark-color);
    background-color: white;
  }
`;

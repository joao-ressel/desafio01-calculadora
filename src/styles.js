import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #38393c;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #38393c;
  width: 50%;
  min-height: 250px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

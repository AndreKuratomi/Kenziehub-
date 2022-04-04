import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  width: 290px;
`;

export const Div = styled.div`
  color: #f00;
  margin-bottom: 0.5rem;
  width: 290px;
`;

export const A = styled.a`
  color: #000;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

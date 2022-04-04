import styled from "styled-components";

export const Main = styled.main`
  text-align: center;
`;

export const Container = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  text-align: center;
`;

export const Button = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0.6rem;
`;

export const ButtonLogout = styled.button`
  color: white;
  margin: 0 1rem;
  padding: 0.5rem;

  &:hover {
    color: yellow;
    text-decoration: underline;
  }
`;

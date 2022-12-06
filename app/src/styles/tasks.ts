import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 75vh;
  justify-content: space-evenly;
`;

const Link = styled.a`
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  text-decoration: none;
`;

const CardContainer = styled.div`
  align-items: center;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  height: 10rem;
  justify-content: center;
`;

export const STSK = {
  Container,
  Link,
  CardContainer,
};

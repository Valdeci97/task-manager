import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 75vh;
  justify-content: space-evenly;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const Link = styled.a`
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  text-decoration: none;
`;

const CardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 10rem;
  justify-content: space-evenly;

  @media (min-width: 761px) {
    border-radius: 0.2rem;
    box-shadow: 0.1rem 0.1rem 0.25rem #cbd;
    width: calc(100% + 4rem);
  }
`;

export const STSK = {
  Container,
  Link,
  CardContainer,
};

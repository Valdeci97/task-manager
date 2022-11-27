import styled from 'styled-components';

const Container = styled.div<{ theme: string }>`
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  display: flex;
  justify-content: space-around;
  font-size: 1.25rem;

  @media (max-width: 440px) {
    font-size: 0.8rem;
  }

  @media (min-width: 441px) and (max-width: 540px) {
    font-size: 0.9rem;
  }

  @media (min-width: 541px) and (max-width: 760px) {
    font-size: 1rem;
  }
`;

export const SH = {
  Container,
};

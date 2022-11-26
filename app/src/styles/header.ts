import styled from 'styled-components';

const Container = styled.div<{ theme: string }>`
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  display: flex;
  justify-content: space-around;
`;

export const SH = {
  Container,
};

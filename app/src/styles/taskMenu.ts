import styled from 'styled-components';
import { styleConfig } from '../utils/constants';

const { backgroundColor: lightBack } = styleConfig.shared.button.light;
const { backgroundColor: darkBack } = styleConfig.shared.button.dark;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Filter = styled.button<{ isActive: boolean }>`
  background: transparent;
  border: none;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  font-size: 1.5rem;
  margin: 0.75rem 0;
  opacity: ${(props) => (props.isActive ? 1 : 0.25)};

  &:hover {
    color: ${(props) => (props.theme === 'light' ? lightBack : darkBack)};
    cursor: pointer;
    opacity: 1;
    text-decoration: underline;
  }
`;

export const STM = {
  Container,
  Filter,
};

import styled from 'styled-components';
import { styleConfig } from '../utils/constants';

const { light, dark } = styleConfig.theme;
const { backgroundColor } = styleConfig.shared.button.dark;

type Theme = { theme: string };

const Label = styled.label<Theme>`
  align-items: center;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  display: flex;
  justify-content: space-evenly;
  margin: 0.5rem 0;
  width: 15rem;
`;

const Select = styled.select<Theme>`
  background-color: transparent;
  border: solid 1px
    ${(props) => (props.theme === 'light' ? '#000' : backgroundColor)};
  border-radius: 0.25rem;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  height: 2rem;
  text-align: center;
  width: 8rem;

  &:hover {
    cursor: pointer;
  }

  option {
    background-color: ${(props) => (props.theme === 'light' ? light : dark)};
  }
`;

export const SSLCT = {
  Select,
  Label,
};

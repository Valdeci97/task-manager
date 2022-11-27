import styled from 'styled-components';
import { styleConfig } from '../utils/constants';

const light = styleConfig.shared.button.light;
const dark = styleConfig.shared.button.dark;

type Theme = { theme: string };

const Input = styled.input<Theme>`
  background-color: transparent;
  border: none;
  border-bottom: solid 1px
    ${(props) => (props.theme === 'light' ? '#000' : dark.backgroundColor)};
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  height: 2.25rem;
  margin: 1rem 0;
  text-align: center;

  &::placeholder {
    color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  }
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
`;

const Label = styled.label<Theme>`
  align-items: center;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  display: flex;
  justify-content: space-around;
`;

const Image = styled.img`
  height: 1.6rem;
  position: absolute;
  left: 56.5%;
`;

const Button = styled.button<Theme>`
  background-color: ${(props) =>
    props.theme === 'light' ? light.backgroundColor : dark.backgroundColor};
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.5rem;
  height: 2rem;
  margin-bottom: 1rem;
  width: 8rem;

  &:hover {
    cursor: pointer;
    height: 2.5rem;
    transition: all ease 0.5s;
    width: 10rem;
  }
`;

export const SHARED = {
  Input,
  LabelContainer,
  Label,
  Image,
  Button,
};

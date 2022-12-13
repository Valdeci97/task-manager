import styled from 'styled-components';
import { styleConfig } from '../utils/constants';

const { light, dark } = styleConfig.shared.button;

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

  @media (max-width: 440px) {
    left: 72.5%;
  }

  @media (min-width: 441px) and (max-width: 500px) {
    left: 70%;
  }

  @media (min-width: 501px) and (max-width: 620px) {
    left: 65%;
  }

  @media (min-width: 621px) and (max-width: 720px) {
    left: 62.5%;
  }

  @media (min-width: 721px) and (max-width: 960px) {
    left: 60%;
  }

  @media (min-width: 961px) and (max-width: 1200px) {
    left: 58%;
  }
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

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
`;

const DateTimeInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: solid 1px
    ${(props) => (props.theme === 'light' ? '#000' : dark.backgroundColor)};
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  height: 2.25rem;
  margin: 1rem 0;
  text-align: center;
  width: 10rem;

  &::placeholder {
    color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  }

  &:hover {
    cursor: pointer;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(${(props) => (props.theme === 'light' ? 0 : 1)});
  }

  &[type='time']::-webkit-calendar-picker-indicator {
    filter: invert(${(props) => (props.theme === 'light' ? 0 : 1)});
  }
`;

const Footer = styled.footer<Theme>`
  display: flex;
  justify-content: center;
`;

const TextAreaContainer = styled.textarea<Theme>`
  background-color: transparent;
  border: solid 1px
    ${(props) => (props.theme === 'light' ? '#000' : dark.backgroundColor)};
  border-radius: 0.25rem;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  margin: 0.5rem 0;
  padding: 0.5rem;
  resize: none;
  text-align: center;
`;

export const SHARED = {
  Input,
  LabelContainer,
  Label,
  Image,
  Button,
  Form,
  TextAreaContainer,
  DateTimeInput,
  Footer,
};

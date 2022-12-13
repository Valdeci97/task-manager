import styled from 'styled-components';
import { styleConfig } from '../utils/constants';

const { light, dark } = styleConfig.shared.button;

type Theme = { theme: string };

const Container = styled.div<Theme>`
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

const Header = styled.header`
  display: flex;
`;

const Title = styled.h1`
  margin-right: 5rem;

  @media (max-width: 440px) {
    font-size: 1.25rem;
    margin-right: 2.5rem;
  }

  @media (min-width: 441px) and (max-width: 540px) {
    font-size: 1.4rem;
    margin-right: 2.75rem;
  }

  @media (min-width: 541px) and (max-width: 640px) {
    font-size: 1.5rem;
    margin-right: 4rem;
  }
`;

const LogoffButton = styled.button<Theme>`
  background-color: ${(props) =>
    props.theme === 'light' ? light.backgroundColor : dark.backgroundColor};
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.5rem;
  height: 2rem;
  margin-top: 0.5rem;
  width: 8rem;

  &:hover {
    cursor: pointer;
    height: 2.5rem;
    transition: all ease 0.5s;
    width: 10rem;
  }

  @media (max-width: 440px) {
    font-size: 1rem;
    height: 1.5rem;
    margin-top: 0.1rem;
    width: 4rem;

    &:hover {
      height: 2rem;
      width: 5rem;
    }
  }

  @media (min-width: 441px) and (max-width: 540px) {
    font-size: 1rem;
    height: 1.5rem;
    margin-top: 0.15rem;
    width: 4rem;

    &:hover {
      height: 2.15rem;
      width: 5rem;
    }
  }

  @media (min-width: 541px) and (max-width: 640px) {
    font-size: 1rem;
    height: 1.5rem;
    margin-top: 0.2rem;
    width: 4rem;

    &:hover {
      height: 2.25rem;
      width: 5rem;
    }
  }

  @media (min-width: 641px) and (max-width: 760px) {
    font-size: 1rem;
    height: 1.5rem;
    margin-top: 0.3rem;
    width: 5rem;

    &:hover {
      height: 2.4rem;
      width: 6rem;
    }
  }
`;

export const SH = {
  Container,
  Header,
  Title,
  LogoffButton,
};

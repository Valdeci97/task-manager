import styled, { keyframes } from 'styled-components';
import { ToastContainerProps } from '../interfaces/Toast';
import { styleConfig } from '../utils/constants';

const slideIn = keyframes`
  from {
    transform: translateX(2rem);
    opacity: 0;
  } to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div<ToastContainerProps>`
  animation: ${slideIn} 0.5s;
  background-color: ${(props) =>
    props.theme === 'light' ? styleConfig.theme.dark : styleConfig.theme.light};
  border-radius: 1rem;
  border-bottom: solid 15px ${(props) => props.borderBottomColor};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  min-height: 3rem;
  padding: 0.8rem;
  transition: all ease 0.3s;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.color};
  cursor: pointer;
  font-weight: 900;
`;

export const ST = {
  Container,
  Header,
  Button,
};

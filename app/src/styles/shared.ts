import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: solid 1px #000;
  height: 2.25rem;
  margin: 1rem 0;
  text-align: center;
`;

const Label = styled.label`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  height: 1.75rem;
  position: absolute;
  bottom: 41vh;
  left: 54vw;
`;

const Button = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 0.5rem;
  color: #000;
  font-size: 1.5rem;
  height: 2rem;
  width: 10rem;

  &:hover {
    cursor: pointer;
    height: 2.5rem;
    transition: all ease 0.5s;
  }
`;

export const SHARED = {
  Input,
  Label,
  Image,
  Button,
};

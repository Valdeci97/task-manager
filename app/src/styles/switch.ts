import styled from 'styled-components';

const Theme = styled.label`
  align-items: center;
  align-self: center;
  background-color: #bcd;
  border-radius: 1rem;
  display: flex;
  height: 1rem;
  justify-content: center;
  position: relative;
  width: 2.5rem;

  input {
    cursor: pointer;
    height: 100%;
    opacity: 0;
    width: 100%;
  }

  span {
    background-color: #54c7c9;
    border-radius: 1rem;
    cursor: pointer;
    left: 0;
    position: absolute;
    height: 1.5rem;
    width: 1.2rem;
  }

  input:checked + span {
    background: #d4520c;
    left: 70%;
  }
`;

export const SW = {
  Theme,
};

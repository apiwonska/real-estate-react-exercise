import styled from '@emotion/styled';
import { colors } from 'styles/theme';

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
  padding: 60px 25px;
`;

export const H2 = styled.h2`
  font-size: 35px;
  margin-bottom: 0.2em;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  text-transform: uppercase;
  color: ${colors.main};
  margin-bottom: 0.5em;
`;

export const Text = styled.p`
  line-height: 1.5;
  margin: 1.5em;
`;

export const Button = styled.button`
  background-color: white;
  border: 2px solid ${colors.main};
  color: ${colors.main};
  font-size: 16px;
  text-transform: uppercase;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: white;
    background-color: ${colors.main};
  }
`;

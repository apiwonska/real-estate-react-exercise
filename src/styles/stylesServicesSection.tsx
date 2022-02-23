import styled from '@emotion/styled';
import ImgServices from 'assets/services.jpg';

export const List = styled.ul`
  list-style: none;
  text-transform: uppercase;
  line-height: 2;
  font-weight: 600;
  font-size: 1.2em;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding: 50px 30px;
  background-image: linear-gradient(
      rgba(0, 155, 255, 0.7),
      rgba(0, 155, 255, 0.7)
    ),
    url(${ImgServices});
  background-repeat: no-repeat;
  background-size: cover;
`;

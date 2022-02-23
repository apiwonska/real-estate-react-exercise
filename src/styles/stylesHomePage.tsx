import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ImgWood from '../assets/wood.jpg';
import ImgFamily from '../assets/family.jpg';
import ImgKeys from '../assets/keys.jpg';
import ImgPlans from '../assets/plans.jpg';

export const Main = styled.main`
  min-height: 100vh;
  font-family: Roboto, sans-serif;
`;

interface IGridContainerProps {
  size: 'big' | 'sm';
}

const smGridTemplateAreasMobile = css`
  grid-template-areas:
    'tl'
    'tr'
    'br'
    'bl';
`;

const bigGridTemplateAreasMobile = css`
  grid-template-areas:
    'tr'
    'tl'
    'bl'
    'br';
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${({ size }: IGridContainerProps) =>
    size === 'sm' ? smGridTemplateAreasMobile : bigGridTemplateAreasMobile}

  @media (min-width: ${({ size }: IGridContainerProps) => {
    if (size === 'sm') return '800px';
    return '1200px';
  }}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'tl tr'
      'bl br';
  }
`;

interface IGridItemProps {
  gridArea?: 'tl' | 'tr' | 'bl' | 'br' | 'auto';
}

export const GridItem = styled.div`
  width: 100%;
  min-height: 300px;
  grid-area: ${({ gridArea }: IGridItemProps) => gridArea};
`;

const StyledDiv = styled.div`
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const Brand = styled(StyledDiv)`
  height: 100%;
  background-image: radial-gradient(
      rgba(0, 155, 255, 0.2),
      rgba(0, 155, 255, 0.7)
    ),
    url(${ImgWood});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageProject = styled.div`
  height: 100%;
  background-image: url(${ImgPlans});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ImageFamily = styled.div`
  height: 100%;
  background-image: url(${ImgFamily});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Motto = styled(StyledDiv)`
  height: 100%;
  background-image: linear-gradient(
      rgba(0, 155, 255, 0.6),
      rgba(0, 155, 255, 0.6)
    ),
    url(${ImgKeys});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 25px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
`;

export const ServicesSection = styled.div``;

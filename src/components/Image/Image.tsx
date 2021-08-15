import styled from '@emotion/styled';
import { medias } from '../../styles/medias';

type OwnProps = {
  circle?: boolean;
};

type ImageProps = JSX.IntrinsicElements['img'] & OwnProps;

const StyledImage = styled.img<ImageProps>`
  max-width: 5rem;
  max-height: 5rem;
  border-radius: ${({ circle }) => (circle ? '50%' : 0)} 
  
  ${medias.m} {
    max-width: 7.5rem;
    max-height: 7.5rem;
  }

  @media print {
    max-width: 5rem;
    max-height: 5rem;
  }
`;

export default StyledImage;

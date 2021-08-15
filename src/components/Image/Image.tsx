import styled from '@emotion/styled';
import { medias } from '../../styles/medias';

type OwnProps = {
  circle?: boolean;
};

type ImageProps = JSX.IntrinsicElements['img'] & OwnProps;

export default styled.img<ImageProps>`
  max-width: 5rem;
  max-height: 5rem;
  border-radius: ${({ circle }) => (circle ? '50%' : 0)};
  border: 0.2rem solid var(--color-grey-50);
  
  ${medias.s} {
    max-width: 7.5rem;
    max-height: 7.5rem;
  }

  @media print {
    max-width: 5rem;
    max-height: 5rem;
  }
`;

import { FunctionComponent } from 'react';
import photo from './Photo.jpg';
import styled from '@emotion/styled';
import { medias } from '../../styles/medias';

type OwnProps = {};

type ImageProps = OwnProps;

const StyledImage = styled.img`
  max-width: 5rem;
  max-height: 5rem;

  ${medias.m} {
    max-width: 7.5rem;
    max-height: 7.5rem;
  }

  @media print {
    max-width: 5rem;
    max-height: 5rem;
  }
`;

const Image: FunctionComponent<ImageProps> = () => {
  return <StyledImage width="150px" height="150px" src={photo} alt="Damian Kieliszek" />;
};

export default Image;

import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { typo_16_24_semibold } from '../../styles/typography';
import { medias } from '../../styles/medias';
import { Button, Image } from '..';

type OwnProps = {
  name: string;
  position: string;
  image: string;
};

type HeadProps = JSX.IntrinsicElements['div'] & OwnProps;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;

  ${medias.s} {
    flex-direction: row;
  }
`;

const headingStyle = css`
  ${typo_16_24_semibold}
  margin: 0;
  text-align: center;

  ${medias.s} {
    text-align: left;
  }
`;

const StyledTopHeading = styled.h1`
  ${headingStyle}
  color: var(--color-grey-400);
  margin-top: 1.2rem;

  ${medias.s} {
    margin-top: 0;
  }
`;

const StyledBottomHeading = styled.h1`
  ${headingStyle}
  color: var(--color-grey-300);
`;



const Head: FunctionComponent<HeadProps> = ({ name, position, image, ...rest }) => {
  return (
    <StyledContainer {...rest}>
      <div>
        <StyledTopHeading>{name}</StyledTopHeading>
        <StyledBottomHeading>{position}</StyledBottomHeading>
        <Button download="Damian Kieliszek - Resume 2021" href="damian-kieliszek-resume.pdf">
          Download Resume
        </Button>
      </div>
      <Image width="150px" height="150px" alt="Damian Kieliszek Cover" circle src={image} />
    </StyledContainer>
  );
};

export default Head;

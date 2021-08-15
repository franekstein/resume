import { FunctionComponent } from 'react';
import Image from '../Image/Image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { typo_10_15, typo_16_24_semibold } from '../../styles/typography';

type OwnProps = {
  name: string;
  position: string;
};

type HeadProps = JSX.IntrinsicElements['div'] & OwnProps;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const headingStyle = css`
  ${typo_16_24_semibold}
  margin: 0;
`;

const StyledTopHeading = styled.h1`
  ${headingStyle}
  color: var(--color-grey-400);
`;

const StyledBottomHeading = styled.h1`
  ${headingStyle}
  color: var(--color-grey-300);
`;

const StyledButton = styled.a`
  ${typo_10_15}
  appearance: none;
  display: flex;
  color: var(--color-grey-300);
  border: 0.1rem solid var(--color-grey-200);
  border-radius: 0.2rem;
  box-shadow: none;
  padding: 0.8rem;
  background: none;
  margin-top: 0.8rem;
  transition: color, border-color 0.2s ease-out;
  justify-content: center;
  text-decoration: none;

  &:hover {
    color: var(--color-grey-400);
    border: 0.1rem solid var(--color-grey-400);
  }

  &:active,
  &:focus {
    color: var(--color-grey-500);
    outline: 0.1rem solid var(--color-grey-500)
  }

  @media print {
    display: none;
  }
`;

const Head: FunctionComponent<HeadProps> = ({ name, position, ...rest }) => {
  return (
    <StyledContainer {...rest}>
      <div>
        <StyledTopHeading>{name}</StyledTopHeading>
        <StyledBottomHeading>{position}</StyledBottomHeading>
        <StyledButton download="Damian Kieliszek - Resume 2021" href="damian-kieliszek-resume.pdf">Download Resume</StyledButton>
      </div>
      <Image />
    </StyledContainer>
  );
};

export default Head;

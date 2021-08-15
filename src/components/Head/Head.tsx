import { FunctionComponent } from 'react';
import Image from '../Image/Image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { typo_16_24_semibold } from '../../styles/typography';

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

const Head: FunctionComponent<HeadProps> = ({ name, position, ...rest }) => {
  return (
    <StyledContainer {...rest}>
      <div>
        <StyledTopHeading>{name}</StyledTopHeading>
        <StyledBottomHeading>{position}</StyledBottomHeading>
      </div>
      <Image />
    </StyledContainer>
  );
};

export default Head;

import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { typo_10_15_bold } from '../../styles/typography';

type OwnProps = {
  content: string;
};

type SectionHeaderProps = OwnProps;

const StyledHeading = styled.h1`
  ${typo_10_15_bold}
  margin: 0;
  color: var(--color-grey-400);
  text-transform: uppercase;
  border-bottom: 0.1rem solid var(--color-grey-100);
`;

const SectionHeader: FunctionComponent<SectionHeaderProps> = ({ content }) => {
  return (
    <header>
      <StyledHeading>{content}</StyledHeading>
    </header>
  );
};

export default SectionHeader;

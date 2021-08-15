import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { typo_9_13 } from '../../styles/typography';

type OwnProps = {
  content: string;
};

type DescriptionProps = OwnProps;

const StyledParagraph = styled.p`
  ${typo_9_13}
  margin: 0;
  color: var(--color-grey-300);
`;

const Description: FunctionComponent<DescriptionProps> = ({ content }) => {
  return <StyledParagraph dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Description;

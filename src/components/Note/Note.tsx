import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { typo_6_9 } from '../../styles/typography';

type OwnProps = {
  content: string;
};

type NoteProps = OwnProps;

const StyledParagraph = styled.p`
  ${typo_6_9}
  display: none;
  margin: 0;
  color: var(--color-grey-400);

  @media print {
    display: flex;
  }
`;

const Note: FunctionComponent<NoteProps> = ({ content }) => {
  return <StyledParagraph>{content}</StyledParagraph>;
};

export default Note;

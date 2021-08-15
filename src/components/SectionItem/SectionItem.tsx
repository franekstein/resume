import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { typo_10_15, typo_10_15_bold, typo_8_12, typo_9_13 } from '../../styles/typography';

type OwnProps = {
  header: string;
  headerDescription?: string;
  subheader?: string;
  list?: string[];
  listStyle?: 'none' | 'simple';
};

type SectionItemProps = JSX.IntrinsicElements['section'] & OwnProps;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 0.4rem;
  }
`;

const StyledSubheader = styled.h3`
  ${typo_9_13}
  order: 1;
  margin-top: 0;
  color: var(--color-grey-300);
`;

const StyledHeader = styled.h2`
  ${typo_10_15_bold}
  order: 2;
  margin-top: 0;
  color: var(--color-grey-400);
`;

const StyledHeaderDescription = styled.span`
  ${typo_10_15}
  color: var(--color-grey-300);
`;

const StyledList = styled.ul`
  ${typo_8_12}
  order: 3;
  color: var(--color-grey-300);
  list-style: none;
`;

const StyledItem = styled.li<Partial<SectionItemProps>>`
  &:before {
    content: '${(props) => (props.listStyle === 'none' ? '' : '- ')}';
  }
`;

const SectionItem: FunctionComponent<SectionItemProps> = ({
  header,
  headerDescription,
  list,
  subheader,
  listStyle = 'none',
  ...rest
}) => {
  return (
    <StyledSection {...rest}>
      <StyledHeader>
        {header}
        {headerDescription && <StyledHeaderDescription> @ {headerDescription}</StyledHeaderDescription>}
      </StyledHeader>
      {subheader && <StyledSubheader>{subheader}</StyledSubheader>}
      {list && (
        <StyledList>
          {list.map((item, index) => (
            <StyledItem key={`section-item-element-${index}`} listStyle={listStyle}>{item}</StyledItem>
          ))}
        </StyledList>
      )}
    </StyledSection>
  );
};

export default SectionItem;

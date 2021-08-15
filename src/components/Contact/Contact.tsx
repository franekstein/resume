import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { typo_9_13 } from '../../styles/typography';
import Icon from '../Icon/Icon';

export type IconShape = 'email' | 'github' | 'phone' | 'linkedin';

type OwnProps = {
  links: {
    name: string;
    link: string;
    icon: IconShape;
  }[];
};

type ContactProps = OwnProps;

const StyledList = styled.ul`
  ${typo_9_13}
  color: var(--color-grey-300);
  list-style: none;
`;

const StyledItem = styled.li`
  list-style: none;
`;

const StyledLink = styled.a`
  ${typo_9_13}
  display: flex;
  align-items: center;
  color: var(--color-grey-300);
  text-decoration: none;
  transition: color 0.2s ease-out;

  &:hover {
    color: var(--color-grey-500);
  }

  &:active,
  &:focus {
    text-decoration: underline;
    text-decoration-color: var(--color-grey-500);
    text-decoration-thickness: 0.1rem;
    color: var(--color-grey-500);
    outline: none;
  }

  & > * {
    margin-right: 0.4rem;
    width: 1.2rem;
    height: 1.2rem;

    & > path {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const Contact: FunctionComponent<ContactProps> = ({ links }) => {
  return (
    <StyledList>
      {links.map(({ icon, name, link }) => {
        return (
          <StyledItem>
            <StyledLink href={link}>
              <Icon shape={icon} />
              {name}
            </StyledLink>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

export default Contact;

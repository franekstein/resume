import { typo_10_15 } from '../../styles/typography';
import styled from '@emotion/styled';

export default styled.a`
  ${typo_10_15}
  appearance: none;
  display: flex;
  color: var(--color-grey-300);
  border: 0.1rem solid var(--color-grey-300);
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
    outline: 0.1rem solid var(--color-grey-500);
  }

  @media print {
    display: none;
  }
`;
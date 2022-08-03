import styled from 'styled-components';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';

import { DEVICES } from 'styles/global';

export const LanguageSwitchContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 4rem;
  transform: translateY(-1.6rem);
  cursor: pointer;

  @media ${DEVICES.tablet} {
    left: 20%;
    right: unset;
    top: 75%;
  }
`;

interface LanguageListContainerProps {
  show?: boolean;
}

export const LanguageListContainer = styled.div<LanguageListContainerProps>`
  max-height: ${({ show }) => (show ? '500px' : 0)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'unset' : 'none')};
  padding: 0.8rem 1.6rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
  transition: all 0.2s ease-in-out;

  @media ${DEVICES.tablet} {
    border-bottom: 1px solid ${({ theme }) => theme.lightBlue};
  }
`;

export const CurrentLanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.2rem;
`;

export const ArrowDownIcon = styled(ArrowDown)`
  width: 2rem;
  height: 2rem;
  margin-left: 0.8rem;
`;

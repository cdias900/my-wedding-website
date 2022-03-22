import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li``;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: green;
  font-size: 20px;
  color: ${({ theme }) => theme.blue};
  font-family: 'Volkhov', serif;
  position: relative;

  ::before {
    content: '';
    width: 0px;
    height: 3px;
    border-radius: 1.5px;
    background-color: ${({ theme }) => theme.pink};
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.2s;
  }

  &.active::before,
  :active::before,
  :hover::before {
    width: 30px;
  }
`;

import { useShowHeader } from 'hooks';

import { Item, NavbarLink } from './styles';

interface NavbarItemProps {
  link: string;
  label: string;
}

const NavbarItem = ({ link, label }: NavbarItemProps) => {
  const { toggleVerticalNavBar } = useShowHeader();

  return (
    <Item onClick={toggleVerticalNavBar}>
      <NavbarLink to={link} aria-label={label}>
        {label}
      </NavbarLink>
    </Item>
  );
};

export { NavbarItem };

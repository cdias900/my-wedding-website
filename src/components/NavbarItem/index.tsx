import { useShowHeader } from 'hooks';

import { Item, NavbarLink } from './styles';

interface NavbarItemProps {
  link: string;
  label: string;
}

const NavbarItem = ({ link, label }: NavbarItemProps) => {
  const { setShowVerticalNavBar } = useShowHeader();

  return (
    <Item onClick={() => setShowVerticalNavBar(false)}>
      <NavbarLink to={link} aria-label={label}>
        {label}
      </NavbarLink>
    </Item>
  );
};

export { NavbarItem };

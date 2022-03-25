import { Item, NavbarLink } from './styles';

interface NavbarItemProps {
  link: string;
  label: string;
}

const NavbarItem = ({ link, label }: NavbarItemProps) => {
  return (
    <Item>
      <NavbarLink to={link} aria-label={label}>
        {label}
      </NavbarLink>
    </Item>
  );
};

export { NavbarItem };

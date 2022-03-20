import { Item, NavbarLink } from './styles';

interface NavbarItemProps {
  link: string;
  label: string;
}

const NavbarItem = ({ link, label }: NavbarItemProps) => {
  return (
    <Item>
      <NavbarLink to={link}>{label}</NavbarLink>
    </Item>
  );
};

export { NavbarItem };

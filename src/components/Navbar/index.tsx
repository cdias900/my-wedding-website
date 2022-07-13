import { NavbarItem } from 'components/NavbarItem';

import { useShowHeader } from 'hooks';

import { Backdrop, Container, Menu } from './styles';

const items = [
  {
    link: '/',
    label: 'Início',
  },
  {
    link: '/about-us',
    label: 'Sobre nós',
  },
  {
    link: '/history',
    label: 'História',
  },
  {
    link: '/gallery',
    label: 'Galeria',
  },
  {
    link: '/gift-list',
    label: 'Presentes',
  },
];

const Navbar = () => {
  const { showHeader, showVerticalNavBar, toggleVerticalNavBar } =
    useShowHeader();

  return (
    <>
      <Container show={showHeader} showVertical={showVerticalNavBar}>
        <Menu>
          {items.map(item => (
            <NavbarItem key={item.label} link={item.link} label={item.label} />
          ))}
        </Menu>
      </Container>
      <Backdrop show={showVerticalNavBar} onClick={toggleVerticalNavBar} />
    </>
  );
};

export { Navbar };

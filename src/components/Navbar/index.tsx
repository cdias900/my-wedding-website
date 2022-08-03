import { useTranslation } from 'react-i18next';

import { NavbarItem } from 'components/NavbarItem';

import { useShowHeader } from 'hooks';

import { Backdrop, Container, Menu } from './styles';

const items = [
  {
    link: '/',
    label: 'navbar.home',
  },
  {
    link: '/about-us',
    label: 'navbar.aboutUs',
  },
  {
    link: '/history',
    label: 'navbar.history',
  },
  {
    link: '/gallery',
    label: 'navbar.gallery',
  },
  {
    link: '/gift-list',
    label: 'navbar.gifts',
  },
];

const Navbar = () => {
  const { showHeader, showVerticalNavBar, toggleVerticalNavBar } =
    useShowHeader();
  const { t } = useTranslation();

  return (
    <>
      <Container show={showHeader} showVertical={showVerticalNavBar}>
        <Menu>
          {items.map(item => (
            <NavbarItem
              key={item.label}
              link={item.link}
              label={t(item.label)}
            />
          ))}
        </Menu>
      </Container>
      <Backdrop show={showVerticalNavBar} onClick={toggleVerticalNavBar} />
    </>
  );
};

export { Navbar };

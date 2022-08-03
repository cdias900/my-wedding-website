import { useTranslation } from 'react-i18next';

import { NavbarItem } from 'components/NavbarItem';
import { LanguageSwitch } from 'components/LanguageSwitch';

import { useShowHeader } from 'hooks';

import { items } from './constants';

import { Backdrop, Container, Menu } from './styles';

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
        <LanguageSwitch />
      </Container>
      <Backdrop show={showVerticalNavBar} onClick={toggleVerticalNavBar} />
    </>
  );
};

export { Navbar };

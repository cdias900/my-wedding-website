import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';

import { Home, GiftList, Admin } from 'pages';

import {
  AudioPermissionModal,
  Footer,
  Header,
  Navbar,
  Toast,
} from 'components';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Navbar />
    <AudioPermissionModal />
    <Toast />
    <RouterRoutes>
      <Route path="gift-list" element={<GiftList />} />
      <Route path="admin" element={<Admin />} />
      <Route path="*" element={<Home />} />
    </RouterRoutes>
    <Footer />
  </BrowserRouter>
);

export { Routes };

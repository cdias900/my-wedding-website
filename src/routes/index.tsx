import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';

import { Home, GiftList } from 'pages';

import { AudioPermissionModal, Footer, Header, Navbar } from 'components';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Navbar />
    <AudioPermissionModal />
    <RouterRoutes>
      <Route path="gift-list" element={<GiftList />} />
      <Route path="*" element={<Home />} />
    </RouterRoutes>
    <Footer />
  </BrowserRouter>
);

export { Routes };

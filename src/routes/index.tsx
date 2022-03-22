import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';

import { Home, GiftList } from 'pages';

import { Footer, Header, Navbar } from 'components';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Navbar />
    <RouterRoutes>
      <Route path="gift-list" element={<GiftList />} />
      <Route path="*" element={<Home />} />
    </RouterRoutes>
    <Footer />
  </BrowserRouter>
);

export { Routes };

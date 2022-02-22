import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HouseListPage from './pages/HouseListPage';
import HouseDetailPage from './pages/HouseDetailPage';
import AddHousePage from './pages/AddHousePage';
import Layout from './components/Layout';
import NotFound from './components/NotFound';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route element={<Layout />}>
      <Route path="/houses" element={<HouseListPage />} />
      <Route path="/houses/:id" element={<HouseDetailPage />} />
      <Route path="/houses/add" element={<AddHousePage />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;

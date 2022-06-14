import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';

const AppRoutes = () => (
   <Routes>
      <Route path="/" element={<></>} />
      <Route path="/todolist" element={<></>} />
      <Route path="/auth" element={<Login />} />
   </Routes>
);

export default AppRoutes;

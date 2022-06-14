import { Routes, Route } from 'react-router-dom';
import Auth from './pages/AuthPage';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/todolist" element={<TasksPage />} />
         <Route path="/auth" element={<Auth />} />
      </Routes>
   );
};

export default AppRoutes;

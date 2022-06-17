import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Auth/Login/Login';
import SignUp from '../pages/Auth/SignUp/SignUp';
import TodoList from '../pages/TodoList/TodoList';

const AppRoutes = () => (
   <Routes>
      <Route path="/" element={<></>} />
      <Route path="/todoList" element={<TodoList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
   </Routes>
);

export default AppRoutes;

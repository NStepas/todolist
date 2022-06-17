import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserTasks } from '../../../service/auth';
import { ThunkGetUserTasks } from '../../../store/auth/thunk/thunk';

import './TodoList.scss';

const TodoList = () => {
   const dispatch = useDispatch();
   //    const getTasks = async () => {
   //       const tasks = await getUserTasks();
   //       console.log(tasks);
   //    };
   //    getTasks();

   const GetTask = () => {
      dispatch(ThunkGetUserTasks());
   };
   GetTask();

   return (
      <div className="todoList-page">
         <div className="header">
            {/* <img src={require('../../../img/menuImg.png')} /> */}
            <p>TodoList</p>
            <p>{}</p>
            {/* <img src={require('../../../img/users.png')} /> */}
         </div>
         <div className="todoList-container">
            <div className="todoList-menu"></div>
            <div className="todoList-tasks"></div>
         </div>
      </div>
   );
};

export default TodoList;

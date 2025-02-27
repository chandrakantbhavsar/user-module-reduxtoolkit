import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import { addUser, deleteUser, updateUser } from './redux/userSlice';
import { useDispatch } from 'react-redux';


function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  const receivedNewUser = record => {
    
    dispatch(addUser(record));
    messageApi.open({
      type: 'success',
      content: 'New user is added successfully.',
    });
  }

  const handleDeleteUser = (userId) => {

    dispatch(deleteUser(userId));
    messageApi.open({
      type: 'success',
      content: 'User is deleted successfully.',
    });
  }

  const handleEditUser = (updatedData) => {
    
    dispatch(updateUser(updatedData));
    messageApi.success('User is updated successfully.');
  }

  return (
    <Router>
      <div className="app-container">
        {contextHolder}
        <h2>User Module</h2>
        <Navigation />
        <AppRoutes
          users={users}
          receivedNewUser={receivedNewUser}
          handleDeleteUser={handleDeleteUser}
          handleEditUser={handleEditUser}
        />
      </div>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <Link to="/users">Users List</Link>
      {location.pathname !== '/users/add' && (
        <> | <Link to="/users/add">Add User</Link></>
      )}
    </nav>
  );
}

export default App;

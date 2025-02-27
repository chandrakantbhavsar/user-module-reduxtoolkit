import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import UsersList from './pages/UsersList';
import ViewUser from './pages/ViewUser';

const AppRoutes = ({ users, receivedNewUser, handleDeleteUser, handleEditUser }) => (
  <Routes>
    <Route path="/" element={<UsersList userList={users} deleteUser={handleDeleteUser} />} />
    <Route path="/users" element={<UsersList userList={users} deleteUser={handleDeleteUser} />} />
    <Route path="/users/add" element={<AddUser receivedNewUser={receivedNewUser} />} />
    <Route path="/users/edit/:id" element={<EditUser userEdit={users} UpdateUser={handleEditUser} />} />
    <Route path="/users/view/:id" element={<ViewUser viewUser={users} />} />
  </Routes>
);

export default AppRoutes;
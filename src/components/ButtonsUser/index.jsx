import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "antd";

export const CreateUser = () => {
  const navigate = useNavigate();
  const createUser = () => {
    navigate(`/create`);
  }
  return (
    <Button size='large' type='link' onClick={createUser}>
      Create New
    </Button>
  );
};

export const EditUser = (onClick) => (_, data) => {
  return (
    <Button type='primary' onClick={() => onClick(data.id)}>
      Edit
    </Button>
  )
}

export const UserList = () => {
  const navigate = useNavigate();
  const UserList = () => {
    navigate('/users');
  }

  return (
    <Button type='primary' onClick={UserList}>
      List User
    </Button>
  )
}
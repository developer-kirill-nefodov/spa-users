import React from 'react';
import {useParams} from "react-router-dom";

import FormUser from "../../components/Forms/FormUser";
import {UserList, CreateUser} from "../../components/ButtonsUser";

const EditUser = () => {
  const {id} = useParams();

  return (
    <div className='wrapper'>
      <div>
        <CreateUser/>
        <UserList/>
      </div>
      <FormUser
        type='Edit'
        userID={id}
      />
    </div>
  );
};

export default EditUser;
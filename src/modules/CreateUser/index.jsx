import React from 'react';

import FormUser from "../../components/Forms/FormUser";
import {UserList} from "../../components/ButtonsUser";

const CreateUser = () => {
  return (
    <div className='wrapper'>
      <UserList/>
      <FormUser type='Create'/>
    </div>
  );
};

export default CreateUser;
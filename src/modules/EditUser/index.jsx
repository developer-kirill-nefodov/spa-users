import React from 'react';
import {useParams} from "react-router-dom";

import FormUser from "../../components/Forms/FormUser";

const EditUser = () => {
  const {id} = useParams();

  return (
    <div className='wrapper'>
      <FormUser
        type='Edit'
        userID={id}
      />
    </div>
  );
};

export default EditUser;
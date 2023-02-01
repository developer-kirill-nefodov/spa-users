import React from 'react';
import {useParams} from "react-router-dom";

const EditUser = () => {
  const {id} = useParams();

  return (
    <div>
      Edit user {id}
    </div>
  );
};

export default EditUser;
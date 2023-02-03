import React from 'react';

import TableListUser from "../../components/TableListUsers";
import {CreateUser} from "../../components/ButtonsUser";

const ListUsers = () => {
  return (
    <div className='wrapper'>
      <CreateUser/>
      <TableListUser/>
    </div>
  );
};

export default ListUsers;
import React from 'react';
import {Button, Table} from 'antd';


const data = Array(10).fill(0).map((_, i) => ({
  id: i,
  name: `name ${i}`
}));

const TableListUser = () => {
  const columns = [
    {title: 'User ID', dataIndex: 'id'},
    {title: 'Name', dataIndex: 'name'},
    {
      title: 'Edit',
      render: () => (
        <Button type='link'>Edit</Button>
      )
    },
  ]

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
      >

      </Table>
    </div>
  );
};

export default TableListUser;
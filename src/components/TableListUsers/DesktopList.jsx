import React from 'react';
import {Table} from "antd";

import {EditUser} from "../ButtonsUser";
import {StatusTag} from "./Tabs/StatusTab";

const RenderRow = (value, data) => {
  return (
    <div className={`render-row${data.status === 'active' ? ' col-g' : ' col-r'}`}>
      {value}
    </div>
  )
};

const DesktopList = ({data, total, current, pageSize, onChange, editUser}) => {
  const columns = [
    {title: "ID", dataIndex: 'id', render: RenderRow},
    {title: "Name", dataIndex: 'name', render: RenderRow},
    {title: "Email", dataIndex: 'email', render: RenderRow},
    {
      title: "Gender",
      dataIndex: 'gender',
      render: RenderRow,
      filters: [
        {text: 'Male', value: 'male'},
        {text: 'Female', value: 'female'},
      ],
      onFilter: (value, record) => !record.gender.indexOf(value),
    },
    {title: "Status", dataIndex: 'status', render: StatusTag},
    {title: "", dataIndex: 'action', render: EditUser(editUser)},
  ];

  return (
    <Table
      size='large'
      pagination={{onChange, pageSize, current, total, position: ['bottomCenter']}}
      columns={columns}
      dataSource={data}
      loading={!total}
    />
  );
};

export default DesktopList;
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Table} from "antd";

import {useResizeDevice} from "../../utils/hooks/useResizeDevice";
import {useGetPaginationData} from "../../utils/hooks/useGetPaginationData";
import {getListUsers} from "../../utils/api/user";
import {toast} from "../Toastify";

import {EditUser} from "../ButtonsUser";
import RenderRow from "./RenderRow";
import MobileListUsers from "./MobileListUsers";

import './styles.css';

const TableListUser = () => {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  const [isDesktop] = useResizeDevice(900);
  const [page, pageSize, onChange] = useGetPaginationData(total);

  const editUser = (id) => {
    navigate(`/edit/${id}`);
  }

  const columns = [
    {title: "ID", dataIndex: 'id', render: RenderRow},
    {title: "Name", dataIndex: 'name', render: RenderRow},
    {title: "Email", dataIndex: 'email', render: RenderRow},
    {title: "Gender", dataIndex: 'gender', render: RenderRow},
    {title: "Status", dataIndex: 'status', render: RenderRow},
    {title: "Edit", dataIndex: 'action',  render: EditUser(editUser)},
  ]

  useEffect(() => {
    if (page && pageSize) {
      getListUsers(page, pageSize)
        .then(({data}) => {
          if (!total) {
            setTotal(data.meta.pagination.total);
          }
          setData(data.data.map((v, key) => ({...v, key})));
        })
        .catch((e) => {
          toast(e.message, 'error');
        });
    }
  }, [page, pageSize]);

  return (
    <div className='wrapper-table'>
      {isDesktop ? (
        <Table
          size='large'
          pagination={{onChange, pageSize, current: page, total}}
          columns={columns}
          dataSource={data}
          loading={!total}
        />
      ) : (
        <MobileListUsers
          data={data}
          pageSize={pageSize}
          current={page}
          total={total}
          onChange={onChange}
          editUser={editUser}
        />
      )}
    </div>
  );
};

export default TableListUser;
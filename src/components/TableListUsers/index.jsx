import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {useResizeDevice} from "../../utils/hooks/useResizeDevice";
import {useGetPaginationData} from "../../utils/hooks/useGetPaginationData";
import {getListUsers} from "../../utils/api/user";
import {toast} from "../Toastify";

import MobileList from "./MobileList";
import DesktopList from "./DesktopList";

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
  }, [total, page, pageSize]);

  return (
    <div className='wrapper-table'>
      {isDesktop ? (
       <DesktopList
         data={data}
         pageSize={pageSize}
         current={page}
         total={total}
         onChange={onChange}
         editUser={editUser}
       />
      ) : (
        <MobileList
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

import React from 'react';
import {Button, Card, Pagination} from 'antd';

const MobileList = ({data, total, current, pageSize, onChange, editUser}) => {
  return (
    <div className='wrapper-mobile-carts'>
      <Card loading={!total}>
        {data.map((value, key) => (
          <Card
            title={value.name}
            size='small'
            className='item-card'
            key={'Item_' + key}
            extra={
              <Button type='link' onClick={() => editUser(value.id)}>
                Edit
              </Button>
            }
          >
            <div style={{color: value.status === 'active' ? 'green' : 'red'}}>
              <p>Email: {value.email}</p>
              <p>Gender: {value.gender}</p>
              <p>Status: {value.status}</p>
            </div>
          </Card>
        ))}
        <Pagination
          onChange={onChange}
          pageSize={pageSize}
          current={current}
          total={total}
        />
      </Card>
    </div>
  );
};

export default MobileList;
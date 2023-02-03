import React, {useEffect, useState} from 'react';
import {Form, Input, Button, Radio, Select} from 'antd';

import {getOneUser} from "../../utils/api/user";

import './style.css';

const initialState = {
  id: '',
  name: '',
  email: '',
  gender: '',
  status: ''
}

const FormUser = ({type, userID}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (type === 'Edit') {
      getOneUser(userID)
        .then(({data}) => {
          const user = data.data[0];
          if (user) {
            form.setFieldsValue(user);
          }
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div className='wrapper-form'>
      <div className='form'>
        <Form
          form={form}
          layout="horizontal"
          // validateMessages={{}}
          initialValues={initialState}
          // onValuesChange={onFormLayoutChange}
          // disabled={componentDisabled}
          style={{maxWidth: 600}}
        >
          <Form.Item label="Name" name='name' >
            <Input/>
          </Form.Item>
          <Form.Item label="Email" name='email'>
            <Input/>
          </Form.Item>

          <Form.Item label="Gender" name='gender'>
            <Radio.Group>
              <Radio value="female"> Female </Radio>
              <Radio value="male"> Male </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Status" name='status'>
            <Select>
              <Select.Option value="active">Active</Select.Option>
              <Select.Option value="inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item style={{margin: 0}}>
            <Button>{type}</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormUser;
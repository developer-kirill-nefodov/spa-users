import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Form, Input, Button, Radio, Select} from 'antd';

import {toast} from "../Toastify";
import {createUser, getOneUser, updateUser} from "../../utils/api/user";

import LabelForm from "./LabelForm";

import './styles.css';

const initialState = {
  id: '',
  name: '',
  email: '',
  gender: '',
  status: ''
}

const FormUser = ({type, userID}) => {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async (user) => {
    try {
      if (type === 'Edit') {
        await updateUser({...user, id: userID});
        toast('User updated successfully', 'success');
        navigate('/users');
      } else {
        const {data} = await createUser(user);
        toast('User successfully created', 'success');
        navigate(`/edit/${data.data.id}`);
      }
    } catch (e) {
      if (e.response.status === 422) {
        toast(e.response.data.data[0].message, 'error');
      } else {
        toast(e.response.data.data.message, 'error');
      }
    }
  }

  useEffect(() => {
    if (type === 'Edit' && userID) {
      getOneUser(userID)
        .then(({data}) => {
          const user = data.data[0];
          if (user) {
            form.setFieldsValue(user);
          } else {
            toast('User with this ID was not found', 'warning');
            navigate('/users');
          }
        })
        .catch((e) => {
          toast(e.message, 'error');
        });
    }

    // eslint-disable-next-line
  }, [type, userID]);

  return (
    <div className='wrapper-form'>
      <div className='form'>
        <Form
          form={form}
          layout="vertical"
          initialValues={initialState}
          onFinish={onFinish}
        >
          <Form.Item
            label={<LabelForm name='Name'/>}
            name='name'
            rules={[{required: true}]}
          >
            <Input size='large' placeholder="Enter your name"/>
          </Form.Item>
          <Form.Item
            label={<LabelForm name='Email'/>}
            name='email'
            rules={[{required: true, type: 'email'}]}
          >
            <Input size='large' placeholder="Enter your email"/>
          </Form.Item>
          <Form.Item
            label={<LabelForm name='Status'/>}
            name='status'
            rules={[{required: true}]}
          >
            <Select size='large'>
              <Select.Option value="active">Active</Select.Option>
              <Select.Option value="inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label={<LabelForm name='Gender'/>}
            name='gender'
            rules={[{required: true}]}
          >
            <Radio.Group className='col-w'>
              <Radio value="female"> Female </Radio>
              <Radio value="male"> Male </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <div className='submit-button-div'>
              <Button type='primary' htmlType="submit" size='large'>
                {type}
              </Button>
              {type === 'Create' && (
                <Button type='dashed' htmlType="button" onClick={onReset} size='large' style={{marginLeft: 10}}>
                  Reset
                </Button>
              )}
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormUser;

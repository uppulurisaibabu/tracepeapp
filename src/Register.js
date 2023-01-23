//import { Navigate } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
  } from 'antd';
  import axios from 'axios';
  import React, { useState } from 'react';
  const { Option } = Select;
 
  const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  const App = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = (postData: any) => {
      console.log('Received values of form: ', postData);
     // var postData = {
       // "username":"saibabu",
       // "email":"saibabuu3@gmail.com",
       // "password":"Sai@1234",
       // "firstName":"Saibabu",
       // "lastNae":"",
       // "phoneNumber":"9398556457",
       // "picurl":"2.png"
              
       // };
            
            let axiosConfig = {
              headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                  "Access-Control-Allow-Origin": "*",
              }
            };
       
      axios.post('https://subm-v1-dev.herokuapp.com/v1/api/user/register', postData, axiosConfig)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
          if (res.data.status === "Success"){
              navigate("/home")
          }
            })
            .catch((err) => {
              navigate("/")
             // alert("registration deils are not correct");
              console.log("AXIOS ERROR: ", err);
            })
    };
  
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
  
    const suffixSelector = (
      <Form.Item name="suffix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="USD">$</Option>
          <Option value="CNY">¥</Option>
        </Select>
      </Form.Item>
    );
  
 

  
    
  
    
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <div className='overall'>
    
        <h2 className='signup'>SignUp</h2>
        <Form.Item
          name="Username"
          className='user-name'
          label="Username"
          rules={[
            {
              type: 'Username',
              message: 'The input is not valid username',
            },
            {
              required: true,
              message: 'Please input your username',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="firstname"
          label="firstname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your firstname',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="lastname"
          label="lastname"
          rules={[
            {
              
              required: true,
              message: 'Please select your lastname',
            },
          ]}
        >
            <Input />
          
        </Form.Item>
  
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
  
          <Button className='register' type="primary" htmlType="submit">
            Register
          </Button>
          </div>
      </Form>
      
    );
  }

  export default App
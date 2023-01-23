import React, { Fragment } from 'react'
import { Button, Checkbox, Form, Input ,DatePicker,Switch} from 'antd';

const Addsubscription = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  return (
    <Fragment>
      <h1 className='add-head'>Add Subscription</h1>
    
    <Form
      className='addsub-straight'
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <br />
      <Form.Item
        label="Name"
        name="Name"
        className='name-sub'
        rules={[
          {
            placeholder:"enter text",
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
      <Input placeholder="enter text" id="Name"/>
        
      </Form.Item>
      <br />
      <br />

      <Form.Item
        className='name-sub1'
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: 'Please input your price!',
          },
        ]}
      >
        <Input placeholder='Enter price' id="price" />

      </Form.Item>
      
      <Form.Item label="Enter Date" >
        <DatePicker  className='name-sub2'/>
      </Form.Item>
      

      </Form>
      <Form
      className='addsub-straight1'
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <br />
      <Form.Item
        label="Notify before"
        name="Name"
        className='name-sub3'
        rules={[
          {
            placeholder:"enter text",
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
      <Input placeholder="enter text" id="Name"/>
        
      </Form.Item>
      <Form.Item label="Remainder" 
      valuePropName="checked" className='remainder'>
        <Switch />
      </Form.Item>
      <Form.Item label="Auto Renew" 
      valuePropName="checked" className='remainder'>
        <Switch />
      </Form.Item>
      <Form.Item label="Pause Subscription" 
      valuePropName="checked" className='remainder1'>
        <Switch />
      </Form.Item>
      

      
      
          <div className='final-button'>
          <Form.Item >
          <Button type="primary" htmlType="submit" className='individual-button'>
            Submit
          </Button>
          <Button htmlType="button"  className='reset'>
              Cancel
          </Button>
          </Form.Item>
          </div>
          </Form>
      
      </Fragment>
      )
}

export default Addsubscription

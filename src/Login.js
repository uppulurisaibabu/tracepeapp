
import { Image } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Card,warning,message } from 'antd';
import { useNavigate  } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios';

const Login = () => {
  //const warning = () => {
   // message.warning('This is a warning message');
  //};
  const [error,setError]=useState("");
  const navigate = useNavigate()
    const onFinish = (postData: any) => {
      // var postData = {
      //     "email":"mahesh@tracepe.com",
      //     "password":"demo@tracepe"
      //     };
        console.log('Received values of form: ', postData);
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              
          }
        };
   
  axios.post('https://subm-v1-dev.herokuapp.com/v1/api/user/signin-password', postData, axiosConfig)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
      if(res.data.status==='Success'){
        
        setError("sucess")
        navigate("/home");
        
      }else{
        //setError(true)
        //setError("the email or password invalid")
       // alert("the email or password invalid");
        //setError("the email or password invalid");
      }
        })
        .catch((err) => {
          //setError();
          alert("the email or password invalid");
          
          console.log("AXIOS ERROR: ", err);
          
        })

      };
// 
      
      
     
  return (
    
<div className="App">
 <div className="contyner">     
<div className='image-name'>
  <Image
    width={600}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
  </div>
  
  <h1 className='heading'>SignIn</h1>
  <div className='back-ground'>
   <Form
       
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!',
      }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} type= "email" placeholder="Email Adress" />
       
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" >
          Login
        </Button>
        New User <a href="register">register now!</a>
      </Form.Item>
    </Form>
    
  

    </div>
    </div>
    </div>
  

  
  )
}


export default Login

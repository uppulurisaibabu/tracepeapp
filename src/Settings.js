import { Layout, PageHeader, Card, Modal } from 'antd';
import { Button, Checkbox, Form, DatePicker, Switch } from 'antd';
import {UserOutlined} from '@ant-design/icons'
import React, { useState, Fragment } from 'react';
import { Input, Space } from 'antd';
import Navigation from './Navigation';
const { Header, Footer, Sider, Content } = Layout;


const { Search } = Input;

const onSearch = (value) => console.log(value);


const Settings = () => {

   /* const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true)
    };
    const handleOk = () => {
      setIsModalOpen(false)
    };
    const handleCancel = () => {
      setIsModalOpen(false)
    };*/



  return (
    
    <div>
       <Navigation />
   <div className='p-5'>
    <h1 style={{fontSize:20,paddingLeft:0}}>Edit your Settings</h1>
   </div>
   
    <div className='overall-cards'>
    
       
        <Card
        
          className='card-image'
          title=""
          cover={
            <div >
              <img
                className="netflix"
               // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOt4qkhUsItd1F98mnESAFJBacvOqBTZGaNgZhuYoQswYQwiuPeliR4HNrOsamFOJmMRo&usqp=CAU"
               
              />
              <UserOutlined  style={{width:"90px"}}/>
              <img
                className="netflix2"

                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/640px-Plus_symbol.svg.png"

              />"

            
            </div>
          }

          style={{

            width: 400
          }}

        >

        </Card>
        <br />
        <br />
        <br />


        <Card

          className='card-image'
          title=""
          cover={
            <div >
              <img
                className="netflix"
                src="https://seeklogo.com/images/H/hotstar-logo-6A3E165CC3-seeklogo.com.png"

              />
              <img
                className="netflix2"

                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/640px-Plus_symbol.svg.png"

              />"


            </div>
          }

          style={{

            width: 400
          }}

        >

        </Card>
        <br />
        <br />
        <br />

        <Card

          className='card-image'
          title=""
          cover={
            <div >
              <img
                className="netflix"
                src="https://cdn-icons-png.flaticon.com/512/174/174872.png"

              />
              <img
                className="netflix2"

                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/640px-Plus_symbol.svg.png"

              />"


            </div>
          }

          style={{

            width: 400
          }}

        >

        </Card>

      </div>
       </div>

  )
}

export default Settings

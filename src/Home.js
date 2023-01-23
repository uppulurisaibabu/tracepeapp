import { Layout, PageHeader, Card, Modal,Anchor} from 'antd';
import { Icon } from 'antd';
import { Button, Checkbox, Form, DatePicker, Switch } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useState, Fragment } from 'react';
import { Input, Space } from 'antd';
import Navigation from './Navigation';
const { Header, Footer, Sider, Content } = Layout;


const { Search } = Input;

const onSearch = (value) => console.log(value);
const onsub = function () {
  console.log("hello world")
}
const { Link } = Anchor;

const App = () => {

  <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    
  </Anchor>
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true)
  };
  const handleOk = () => {
    setIsModalOpen(false)
  };
  const handleCancel = () => {
    setIsModalOpen(false)
  };
 
  

  return (
    <div>
      <Navigation/> 
      <div className='home-straight'>
        <Search
          className='search'
          placeholder="Search"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <Button className='home-button' onClick={showModal}>Add Subscription</Button>
      </div>
 <h2 className='my-sub'>Mysubscriptions</h2>
      
      
      
      <div className='overall-cards'>
        <Card

          className='card-image'
          title=""
          cover={
            <div >
              <img
                className="netflix"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOt4qkhUsItd1F98mnESAFJBacvOqBTZGaNgZhuYoQswYQwiuPeliR4HNrOsamFOJmMRo&usqp=CAU"

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
      <br />
      <br />

      <div className='overall-cards'>
        <Card

          className='card-image'
          title=""
          cover={
            <div >
              <img
                className="netflix"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOt4qkhUsItd1F98mnESAFJBacvOqBTZGaNgZhuYoQswYQwiuPeliR4HNrOsamFOJmMRo&usqp=CAU"

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
      


      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1200} className="add-sub"
      bodyStyle={{height:'250px'}}  
footer={null} 
      >
        <Fragment>
          <h1 className='add-head'>Add Subscription</h1>
          <div className='row mb-2'>
            <div className='col-4'>
              <label> Name</label>
            <Input placeholder="enter text" />
            
            </div>
            <div className='col-4'>
            <label> Price</label>
            <Input placeholder="enter text" />
            </div>
            <div className='col-4 dateSub'>
            <label> Enter Date</label>
            <DatePicker  />
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <label> Notify before</label>
              <Input placeholder="enter text" id="Name" />
            
            </div>
            <div className='col-2 mt-4'>
            <label className='pr-1'> Remainder</label>
            <Switch />
            </div>
            <div className='col-2 mt-4'>
            <label className='pr-1'> Auto Renew</label>
            <Switch />
            </div>
            <div className='col-3 mt-4'>
            <label className='pr-1'> Pause Subscription</label>
            <Switch />
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-12 text-right'>
            <Button type="primary" htmlType="submit" className='individual-button'>
                  Submit
                </Button>
                <Button htmlType="button" className='reset'>
                  Cancel
                </Button>
            </div>
          </div>

        </Fragment>

      </Modal>
    </div>

  );


};

export default App;















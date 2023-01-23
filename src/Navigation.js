import { Layout, PageHeader, Card, Modal,Anchor} from 'antd';
import { Icon } from 'antd';
import { Button, Checkbox, Form, DatePicker, Switch } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useState, Fragment } from 'react';
import { Input, Space } from 'antd';
import { Bicycle} from 'react-bootstrap-icons';
// import {BarChartLineFill} from 'react-bootstrap-icons'
const { Header, Footer, Sider, Content } = Layout;

const Navigation=()=>{
  // const [style, setStyle] = useState("cont");
    const navigate = useNavigate();
    const discover = (url) =>{
        debugger
        navigate('/'+url);  
                    
        }
return (
<>
<Layout>
        <Header className='tracepe'>Tracepe</Header>
        <Bicycle  className='bi float-right' size={30} />
      </Layout>
      <div className='straight'>
        
        <div className='header'
        onClick={()=>discover('mySubcription')}>
        Mysubscriptions
        </div>
        <div className='header'
        onClick={() =>discover('discover')}>
        Discover
        
        </div>
        <div className='header'
        onClick={() => discover('dashboard')}>
        Dashboard
        
        </div>
        <div className='header'
        onClick={() => discover('settings')}>
        Settings
        
        </div>
      </div>
</>  
)
}
export default Navigation;
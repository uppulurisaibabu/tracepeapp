import { Carousel,Button,Input} from 'antd';

import {Container ,Card, Col} from 'react-bootstrap';  
import React, { Fragment } from 'react'
import Navigation from './Navigation';
import { useState } from 'react';
const contentStyle = {
    height: '130px',
    marginLeft: '93px',
    marginRight: '93px',
    marginTop:"20px",
  
    lineHeight: '160px',
    
    background: '#f4f4f4',
    
  };
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true)
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false)
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false)
  // };
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
function Discover() {
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
    <>
    <Navigation/> 
    <Carousel autoplay arrows={true}>
      
    <div>
      <h3 style={contentStyle}></h3>
    </div>
    <div>
      <h3 style={contentStyle}></h3>
    </div>
    <div>
      <h3 style={contentStyle}></h3>
    </div>
    <div>
      <h3 style={contentStyle}></h3>
    </div>
    <div>
      <h3 style={contentStyle}></h3>
    </div>
    
    
  

    
  
  </Carousel>
  
 
 
  
  <div>
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
  {/* <div className='App'> */}
  {/* <h3>all</h3> */}
  <Container className='p-2'>  
  <Col md="3"> 
  <h3 className='ml-5'>All</h3> 
  <Card>  
  
  <Card.Body>
     
    <Card.Title></Card.Title>  
    
    
  </Card.Body>  
</Card>  
    </Col>  
</Container>  
  
{/* </div> */}
<Container className='p-2'>  
  <Col md="3"> 
  <h3 className='ml-5'>Food</h3> 
  <Card>  
  
  <Card.Body>
     
    <Card.Title></Card.Title>  
    
    
  </Card.Body>  
</Card>  
    </Col>  
</Container>  
  </div>
 </>
  );
}

export default Discover;



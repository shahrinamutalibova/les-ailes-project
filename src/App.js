import React,{useState } from 'react'
import {UserOutlined , FacebookFilled, InstagramFilled } from "@ant-design/icons"
import { Modal } from 'antd' ;
import Api from "./Api"
import Carousel from './Carousel';


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [count , setCount] = useState(0)
  const [items, setItems] = useState([]);



  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };
  return (
    <div className='container'>
      <nav  style={{display:"flex",padding:"20px 50px",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
      <img className='logo' src="https://lesailes.uz/_next/image?url=%2Fassets%2Fmain_logo.svg&w=384&q=75" alt="" />
       <button style={{background:"#E30242"}} className='button btn1'> Укажите свой адрес</button>
      <a href="onac">О нас</a>
       <a href="#">Меню</a>
       <a href="#">Акции</a>
       <a href="#">Филлиали</a>
       <a href="#">Контакты</a>
       <div>
       <button style={{background:"#E30242"}}  className="button">
      Корзина | <>{count}</>
    </button>
         
    <Modal visible={isModalVisible1} onCancel={handleCancel1} onOk={handleOk1} footer={null}>
  {items.map((item) => (
    item.count > 0 && 
    <div key={item.id}>
      <h2>{item.text}</h2>
      <p>{item.count}</p>
    </div>
  ))}
</Modal>
       <button
          style={{marginLeft:"20px",padding:"7px 10px",borderRadius:"5px",border:"1px solid grey"}}
          onClick={showModal}
        >
          <UserOutlined/>
        </button>
        <Modal width={300} 
          className='user-modal'
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        > <br />
         <div style={{textAlign:"center"}}>
         <button className='btn' style={{padding:"5px 20px",border:"1px solid lightGrey",borderRadius:"8px"}}>Rus</button>
          <button className='btn' style={{padding:"5px 20px",margin:"0px 5px",border:"1px solid lightGrey",borderRadius:"8px"}}>Uzb</button>
          <button className='btn' style={{padding:"5px 20px",border:"1px solid lightGrey",borderRadius:"8px"}}>Eng</button>
         <button style={{width:"84%",padding:"15px 0",marginTop:"5px",background:"#50C878",border:"none",borderRadius:"7px",color:"white"}}>Войти</button>
         </div>
        </Modal>
       </div>
      </nav>
      <hr />
      <br />
  <Carousel style={{height:"100vh"}}/>
  <Api count={count} setCount={setCount} />
      <hr />
         <div style={{padding:"30px 50px"}} className="footer ">
          <div>
            <button style={{padding:"10px 30px",borderRadius:"15px",border:"none",color:"white",backgroundColor:"#404040"}}>
               Телеграм бот
            </button>
          </div>
          <div className='a'>
            <a href="#">О нас</a><br />
            <a href="#">Меню</a><br />
            <a href="#">Акции</a><br />
            <a href="#">Доставка и оплата</a><br />
            <a href="#">Контакты</a>
          </div>
          <div>
            <button  style={{padding:"10px 13px",borderRadius:"10px",border:"none",color:"white",backgroundColor:"#404040"}}>
                      <FacebookFilled/>
              </button>
              <button  style={{padding:"10px 13px",borderRadius:"10px",marginLeft:"10px",border:"none",color:"white",backgroundColor:"#404040"}}>
                <InstagramFilled/>
              </button>
          </div>
         </div>
         <hr />
         <div style={{padding:"10px 50px",display:"flex",alignItems:"center"}}>
         <a href="#">2023 Все права защищены</a>
         <img style={{width:"150px",marginLeft:"25%"}} src="https://lesailes.uz/_next/image?url=%2Fassets%2Fmain_logo.svg&w=384&q=75" alt="" />
         </div>
      </div>
  )
}

import React, { useState } from 'react'
import './Scroll.scss'
import { Drawer, Button, Radio, Space, Modal, Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;






const RadioGroup = Radio.Group;

const  Scroll = () => {
       
       const [change, setChange]  = useState(false)

      const  showModal = () => {
                setChange  (true)
            };
          
           const  handleOk = e => {
              console.log(e);
              setChange  (false)
              
            };
          
            const handleCancel = e => {
              console.log(e);
              setChange  (false)

              
            };
      

       return (
              <div className="scrollCont">


              <div className="firstSection">
              <div className="containerFirstSection">
              
              <div className="leftOne">
              <h1>Enjoy Chinitas films on <br></br> your tv  </h1>
              </div>
             
              <div className="rightOne">
              </div>


              </div>
              </div>



              <div className="secondSection">

              <div className="containerSecondSection">

              <div className="leftTwo"> </div>

              <div className="rightTwo">
              <h1>Download your favorite series <br></br> to watch when your phone internet is off</h1>
              <p>Save always some favorite film, is easy to watch on your free time</p>
              </div>


              </div>
              </div>

              <div className="thirdSection">

              <div className="containerThirdSection">

              <div className="leftThird"> 
              <h1>Enjoy anytime, anywhere <br></br> to watch when your phone internet is off</h1>
              <p>just play and we will our with you</p>

              </div>
             
              <div className="rightThird">
            
              </div>


              </div>
              </div>



              <div className="fourthSection">
              <h1 className="h1FouthSection">Relevants questions</h1>
              <div className="modalScroll">
              <Button type="primary" onClick={showModal}>
                Whats is Chinitas Films
              </Button>
              <Modal
                title="Chinitas Films"
                visible={change}
               onOk={handleOk}
               onCancel={handleCancel}
              >
                <p>lorem ipsum lorem ipsum lorem ipsum</p>
                
              </Modal>
              
            </div>
            <div className="modalScroll">
            <Button type="primary" onClick={showModal}>
              Whats is Chinitas Films
            </Button>
            <Modal
              title="Chinitas Films"
              visible={change}
             onOk={handleOk}
             onCancel={handleCancel}
            >
              <p>lorem ipsum lorem ipsum lorem ipsum</p>
              
            </Modal>
            
          </div>

          <div className="modalScroll">
            <Button type="primary" onClick={showModal}>
              Whats is Chinitas Films
            </Button>
            <Modal
              title="Chinitas Films"
              visible={change}
             onOk={handleOk}
             onCancel={handleCancel}
            >
              <p>lorem ipsum lorem ipsum lorem ipsum</p>
              
            </Modal>
            
          </div>


          <div className="modalScroll">
            <Button type="primary" onClick={showModal}>
              Whats is Chinitas Films
            </Button>
            <Modal
              title="Chinitas Films"
              visible={change}
             onOk={handleOk}
             onCancel={handleCancel}
            >
              <p>lorem ipsum lorem ipsum lorem ipsum</p>
              
            </Modal>
            
          </div>


          <div className="modalScroll">
            <Button type="primary" onClick={showModal}>
              Whats is Chinitas Films
            </Button>
            <Modal
              title="Chinitas Films"
              visible={change}
             onOk={handleOk}
             onCancel={handleCancel}
            >
              <p>lorem ipsum lorem ipsum lorem ipsum</p>
              
            </Modal>
            
          </div>
              <Search className="searchNavFouthSection"
              placeholder="email"
               enterButton="Join free for a month"
              size="large"
              onSearch={value => console.log(value)}
        />
        <h4>Start writting your email</h4>

      
              </div>
             
              </div>
       )
}

export default Scroll

import React, { Component } from 'react'
import { Card, Modal, Button } from 'antd';
import './ui.less';

export default class Modals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMoadl1: false
    }
  

  }

  handleModal = (type)=> {
    this.setState({
      [type]: true
    })
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: '确认?',
       content: 'text',
       onOk(){
         console.log('OK');
       },
       onCancel(){
         console.log('Cancel')
       }
     })
  }

  render() {
    return (
      <div>
        <Card title="基础模态框" className="ant-card">
            {/** 点击事件传递参数时，需要用箭头函数去传递，否则会立刻执行并报错 **/}
            <Button type="primary" onClick={()=>this.handleModal('showMoadl1')}>Open</Button>
            <Button type="primary" onClick={()=>this.handleModal('showMoadl2')}>自定义页脚</Button>
            <Button type="primary" onClick={()=>this.handleModal('showMoadl3')}>顶部20px弹框</Button>
            <Button type="primary" onClick={()=>this.handleModal('showMoadl4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className="ant-card">
            {/** 点击事件传递参数时，需要用箭头函数去传递，否则会立刻执行并报错 **/}
            <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
            <Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
            <Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
            <Button type="primary" onClick={()=>this.handleConfirm('warning')}>Warning</Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showMoadl1}
          onCancel={()=>{
            this.setState({
              showMoadl1: false
            })
          }}
        >
          Welcome to my life
        </Modal>
        <Modal
          title="React"
          visible={this.state.showMoadl2}
          okText="下一步"
          cancelText="算了"
          onCancel={()=>{
            this.setState({
              showMoadl2: false
            })
          }}
        >
          自定义模态框
        </Modal>
        <Modal
          title="React"
          style={{top:20}}
          visible={this.state.showMoadl3}
          onCancel={()=>{
            this.setState({
              showMoadl3: false
            })
          }}
        >
          距离顶部20px模态框
        </Modal>
        <Modal
          title="React"
          wrapClassName="vertical-center-modal"
          visible={this.state.showMoadl4}
          onCancel={()=>{
            this.setState({
              showMoadl4: false
            })
          }}
        >
          垂直居中模态框
        </Modal>
      </div>
    )
  }
}

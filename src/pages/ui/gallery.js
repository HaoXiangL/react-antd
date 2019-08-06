import React, { Component } from 'react'
import { Card, Row, Col, Modal } from 'antd';

export default class gallery extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      visible: false,
      currentImg: ''
    }
    this.openPic = this.openPic.bind(this)
  }
  
  openPic = (item) => {
    this.setState({
      visible: true,
      currentImg: `/gallery/${item}`
    })
  }

  render() {
    const imgs = [
      ['1.png','2.png','3.png','4.png','5.png'],
      ['6.png','7.png','8.png','9.png','10.png'],
      ['11.png','12.png','13.png','14.png','15.png'],
      ['16.png','17.png','18.png','19.png','20.png'],
      ['21.png','22.png','23.png','24.png','25.png']
    ]
    const imgList = imgs.map((list) => {
      return list.map((item,index) => {
        return (
        <Card 
          key={index}
          style={{mrginBottom: 10}}
          cover={<img src={`/gallery/${item}`} alt="" onClick={()=>this.openPic(item)}/>}
        >
          <Card.Meta
            title="React admin"
            description="I love React"
          />
        </Card>
      )})
    })

    // const col = imgs.map((i) => {
    //   return (
    //     <Col md={5}>
    //     {imgList[i]}
    //     </Col>
    //   )
    // })

    return (
      <div>
        <Row>
          <Col md={5}>{imgList[0]}</Col>
          <Col md={5}>{imgList[1]}</Col>
          <Col md={5}>{imgList[2]}</Col>
          <Col md={5}>{imgList[3]}</Col>
          <Col md={4}>{imgList[4]}</Col>
        </Row>

        <Modal
          height={'50%'}
          width={'40%'}
          title="Pic"
          visible={this.state.visible}
          onCancel={() => {
            this.setState({
              visible: false
            })
          }}
          footer={null}
        >
          <img src={this.state.currentImg} alt="" style={{width: '100%' }}/>
        </Modal>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Card, Button,message} from 'antd'

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage = (type) => {
    message[type]('congratulation!')
  }
  render() {
    return (
      <div>
        <Card title="全局提示message">
            <Button type="primary" onClick={() => this.handleMessage('success')}>Success</Button>
            <Button type="primary" onClick={() => this.handleMessage('info')}>Info</Button>
            <Button type="primary" onClick={() => this.handleMessage('warning')}>Warning</Button>
            <Button type="primary" onClick={() => this.handleMessage('error')}>Error</Button>
            <Button type="primary" onClick={() => this.handleMessage('loading')}>Loading</Button>
        </Card>
        
      </div>
    )
  }
}

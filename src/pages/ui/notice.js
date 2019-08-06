import React, { Component } from 'react'
import { Card, Button,notification} from 'antd'

export default class Notice extends Component {
  constructor(props) {
    super(props);
    this.openNotification = this.openNotification.bind(this);
  }

  openNotification = (type,direction) => {
    if(direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: 'go~',
      description: `you can see this ${type} notification`
    })
  }

  render() {
    return (
      <div>
        <Card title="通知提醒框">
          <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
        </Card>

        <Card title="通知提醒框" >
          <Button type="primary" onClick={() => this.openNotification('success','topLeft')}>topLeft</Button>
          <Button type="primary" onClick={() => this.openNotification('info','topRight')}>topRight</Button>
          <Button type="primary" onClick={() => this.openNotification('warning','bottomLeft')}>bottomLeft</Button>
          <Button type="primary" onClick={() => this.openNotification('error','bottomRight')}>bottomRight</Button>
        </Card>
        
      </div>
    )
  }
}

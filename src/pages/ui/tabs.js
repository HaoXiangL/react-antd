import React, { Component } from 'react'
import { Card,Tabs, message,Icon} from 'antd'

export default class tabs extends Component {
  constructor(props) {
    super(props)
    
    this.callback = this.callback.bind(this)
  }
  
  callback = (key) => {
    message.info(`你选择了标签:${key}`)
  }

  render() {
    const { TabPane } = Tabs;
    return (
      <div>
        <Card title="Tabs">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">Tab1</TabPane>
            <TabPane tab="Tab 2" key="2">Tab2</TabPane>
            <TabPane tab="Tab 3" key="3">Tab3</TabPane>
          </Tabs>
        </Card>

        <Card title="带图Tabs">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">Tab1</TabPane>
            <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">Tab2</TabPane>
            <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">Tab3</TabPane>
          </Tabs>
        </Card>
        
      </div>
    )
  }
}

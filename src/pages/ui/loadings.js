import React, { Component } from 'react'
import { Card,Spin,Icon ,Alert } from 'antd';
import './ui.less'
export default class Loadings extends Component {

  render() {
    const icon = <Icon type="loading" style={{fontSize: 24}}/>
    return (
      <div>
        <Card title="Spin用法">
            
            <Spin size="small"/>
            <Spin />
            <Spin size="large"/>
            
            <Spin  indicator={icon} />
        </Card>
        
        <Card title="内容遮罩" >
            <Alert 
              message="React"
              description="welcome back"
              type="info"
            />
            <Spin tip="加载中...">
              <Alert 
                message="React"
                description="welcome back"
                type="warning"
              />
            </Spin>
            <Spin indicator={icon}>
              <Alert 
                message="React"
                description="welcome back"
                type="warning"
              />
            </Spin>
        </Card>
        
      </div>
    )
  }
}

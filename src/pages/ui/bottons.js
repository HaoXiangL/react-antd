import React, { Component } from 'react'
import { Card, Button, Icon, Radio } from 'antd';
import './ui.less'
import ButtonGroup from 'antd/lib/button/button-group';
export default class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      size: 'default'
    }

    this.handleCloseLoading = this.handleCloseLoading.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  handleCloseLoading(){
    this.setState(state => ({
      loading: !state.loading
    }));
  }

  handleRadio = e =>{
    console.log(e.target.value)
    this.setState({
      size: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Card title="基础按钮" extra={<a href="#/ui/buttons">More</a>} hoverable>
            <Button type="primary">Holk</Button>
            <Button>Holk</Button>
            <Button type="dashed">Holk</Button>
            <Button type="danger">Holk</Button>
            <Button disabled>Holk</Button>
        </Card>
        <Card title="图形按钮" extra={<a href="#/ui/buttons">More</a>}>
            <Button icon="plus">创建</Button>
            <Button icon="edit">编辑</Button>
            <Button icon="delete">删除</Button>
            <Button shape="circle" icon="search"></Button>
            <Button type="primary" icon="search">搜索</Button>
            <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading" extra={<a href="#/ui/buttons">More</a>}>
            <Button type="primary" loading={this.state.loading}>确定</Button>
            <Button type="primary" shape="circle" loading={this.state.loading}></Button>
            <Button loading={this.state.loading}>点击加载</Button>
            <Button shape="circle" loading={this.state.loading}></Button>
            <Button type="primary" onClick={this.handleCloseLoading}>{this.state.loading ? '停止加载' :'重新加载'}</Button>
        </Card>
        <Card title="按钮组">
          <ButtonGroup>
            <Button type="primary" icon="left">返回</Button>
            <Button type="primary">前进<Icon type="right" /></Button>
          </ButtonGroup>
        </Card>
        <Card title="按钮尺寸">
          <Radio.Group value={this.state.size} onChange={this.handleRadio}>
              <Radio value="small">小</Radio>
              <Radio value="default">中</Radio>
              <Radio value="large">大</Radio>
          </Radio.Group>
            <Button type="primary" size={this.state.size}>holk</Button>
            <Button type="dashed" size={this.state.size}>holk</Button>
            <Button type="danger" size={this.state.size}>holk</Button>
        </Card>
      </div>
    )
  }
}

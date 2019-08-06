import React, { Component } from 'react';
import menuConfig from '../../config/menuConfig';
import { Menu} from 'antd';
import './index.less'
import MenuItem from 'antd/lib/menu/MenuItem'

import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu;

export default class NavLeft extends Component {
  
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    
    this.setState({
      menuTreeNode
    })
  }
  
  //菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
        
      }
      return <MenuItem title={item.title} key={item.key}>
      <NavLink to={item.key}>{item.title}</NavLink>
      </MenuItem>
    })
  }

  render() {
    return (
      <div className="left-nav">
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
        </div>
        <Menu theme='dark'>
            {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

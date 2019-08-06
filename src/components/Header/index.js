import React, { Component } from 'react'
import {Row,Col} from 'antd'
import './index.less';
// import Util from '../../utils/utils';
import axios from '../../axios/index';
import * as moment from 'moment'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sysTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      userName: 'Holk',
      weather: [],
      weatherPicUrl: ''
    }
  }

  componentWillMount() {
    this.timer = setInterval(()=>{
      this.setState({
        sysTime: moment().format('YYYY-MM-DD HH:mm:ss')
      })
    },1000)

    this.getWeatherAPI();
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  getWeatherAPI() {
    // let city = 'shenzhen'
    // axios.jsonp({
    //   url:`http://api.map.baidu.com/telematics/v3/weather?
    //   location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    // }).then((res) => {
    //   let data = res.results[0].weather_data[0]
    //  this.setState({
    //    weather:data.weather,
    //    weatherPicUrl:data.dayPictureUrl
    //  })
    // })
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎,{this.state.userName}</span>
            <a href="/loginout">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="right">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.weatherPicUrl} alt=""/>
            </span>
            <span className="weather">
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}

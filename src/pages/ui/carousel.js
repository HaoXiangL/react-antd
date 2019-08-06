import React, { Component } from 'react'
import { Card, Carousel } from 'antd'
import './ui.less'

export default class carousel extends Component {
  
  render() {
    return (
      <div>
        <Card title="文字轮播图">
            <Carousel autoplay effect='fade'>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        </Card>
        <Card title="图片轮播图" className="pic">
            <Carousel autoplay effect='fade'>
                <div>
                  <img src="/assets/carousel-img/carousel-1.jpg" alt=""/>
                </div>
                <div>
                  <img src="/assets/carousel-img/carousel-2.jpg" alt=""/>
                </div>
                <div>
                  <img src="/assets/carousel-img/carousel-3.jpg" alt=""/>
                </div>
            </Carousel>
        </Card>
      </div>
    )
  }
}

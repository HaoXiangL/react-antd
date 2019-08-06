import React, { Component } from 'react'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login';
import Admin from './admin'
import Buttons from './pages/ui/bottons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Message from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';

import Home from './pages/home';
import Notmatch from './pages/notmatch';

export default class router extends Component {
  render() {
    return (
        <Router>
          <App>
            <Route path="/" render={()=>
              <Admin>
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/ui/buttons" component={Buttons}/>
                  <Route path="/ui/modals" component={Modals}/>
                  <Route path="/ui/loadings" component={Loadings}/>
                  <Route path="/ui/notification" component={Notice}/>
                  <Route path="/ui/messages" component={Message}/>
                  <Route path="/ui/tabs" component={Tabs}/>
                  <Route path="/ui/gallery" component={Gallery}/>
                  <Route path="/ui/carousel" component={Carousel}/>
                  <Route path="/form/login" component={Login}/>
                  <Route component={Notmatch}/>
                </Switch>
              </Admin>
            } />
          </App>
        </Router>
    )
  }
}

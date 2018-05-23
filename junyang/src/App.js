import React, { Component } from 'react';
import './stylesheets/App.css';
import {Route , Switch ,Redirect ,withRouter} from "react-router-dom"
import Footer from './components/commons/Appfooter'
import Home from './components/pages/Home'
import Shops from './components/pages/Shops'
import Fav from './components/pages/Fav'
import Email from './components/pages/Email'
import Mine from './components/pages/Mine'
//import "./assets/images"
//import {connect} from "react-redux"
class App extends Component {
	 renderRoutes () {//渲染Route路由的方法
    let { routes } = this.props
    return routes.map(item => {
            return (<Route 
              exact = {item.isExact} 
              path = {item.path} 
              key = {item.id}
              component={item.component} />)
          })
  }
  render() {
    return (
      <div className="app">
        
        <Switch>    
          {this.renderRoutes()}
          <Redirect from = "**" to = {{pathname: '/'}} />
        </Switch>

        <Footer />
      </div>
    )
  }
  
  
}

App.defaultProps = {
  routes: [
    {id: 1, path: '/', component: Home, isExact: true},
    {id: 2, path: '/shops', component: Shops},
    {id: 3, path: '/fav', component: Fav},
    {id: 4, path: '/email', component: Email},
    {id: 5, path: '/mine', component: Mine}
  ]
}
export default withRouter(App);

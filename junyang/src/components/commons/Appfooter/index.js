	import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import "./index.scss"

const NavItem = ({item}) =>{
	return (
		<NavLink exact to={{pathname:item.path}}>
			<i className={"fa fa-"+item.icon}></i>
			<span>{item.title}</span>
		</NavLink>
	)
}

class Footer extends Component {
	render(){
		let {navs} = this.props
		return (
			<div className="app-footer">
			 	{
			 		navs.map(item=>{
			 			return <NavItem key={item.id} item={item} />
			 		})
			 	
			 	}
			</div>
		)
	}
}
Footer.defaultProps = {
	navs:[
		{id:1,icon:"home",title:'下厨房',path:'/'},
		{id:2,icon:"university",title:'市集',path:'/shops'},
		{id:3,icon:"heart-o",title:'收藏',path:'/fav'},
		{id:4,icon:"envelope-o",title:'信箱',path:'/email'},
		{id:5,icon:"user-o",title:'我',path:'/mine'}
	]
}
export default Footer
import React,{Component} from "react"
import "./index.scss"
import List1 from "../../commons/list1" 
import List2 from "../../commons/list2" 
 class Shops extends Component{
 	render(){
 		let {navs} = this.props
 		console.log(navs)
 		return(
 			<div className = "shops">
 				<Header />
 				<section className="content">
 					<div className="box">
	 					{
	 						navs.map(item=>{
	 							return <Nav key={item.id} item={item} />
	 						})
	 					}
 					</div>
 					<aside>
 						<img src={require("../../../assets/shops/aside.jpg")} alt="" />
 					</aside>
 					<List1 />
 					<List2 type="new"/>
 					<List2 type="jingdian"/>
 				</section>
 				
 				
 			</div>
 		)
 	}
 }
 class Header extends Component{
 	render(){
 		return (
 			<div className="header"> 
 				<div>
 					<i className="fa fa-location-arrow icon"></i>
 					<span>北京市</span>
 				</div>
 				<div>
 					<span className="fa fa-search"></span>
 					<span>搜索商品</span>
 				</div>
 				<i className="fa fa-shopping-cart"></i>
 			</div>
 		)
 	}
 }
 class Nav extends Component{
 	render(){
 		let { item } = this.props
 		return (
 			<div className="nav">
				<div>
					<img  src={require("../../../assets/shops/"+item.icon)}  alt={item.title} />
				</div>
				<span>{item.title}</span>
 				
 			</div>
 		)
 	}
 }
 
 Shops.defaultProps = {
 	navs:[
		{id:1,icon:"icon2.jpg",title:'烘焙'},
		{id:2,icon:"icon3.jpg",title:'果蔬生鲜'},
		{id:3,icon:"icon4.jpg",title:'器具'},
		{id:4,icon:"icon5.jpg",title:'领券'},
		{id:5,icon:"icon1.jpg",title:'方便食品'},
		{id:6,icon:"icon7.jpg",title:'进口食品'},
		{id:7,icon:"icon6.jpg",title:'时令鲜食'},
		{id:8,icon:"icon8.jpg",title:'全部分类'}
	]
 }
 export default Shops

import React,{Component} from "react"
 import "./index.scss"
 import Loginoption from "../../commons/loginoption"
 
 class Fav extends Component{
 	render(){
 		return(
 			<div className = "fav">
 				<Top/>
 				<Favcontent/>
   				<Loginoption/>
 			</div>
 		)
 	}
 }
 class Top extends Component{
 	render(){
 		return(
 			<div className="Fav-header">
 				<div>
 					<i className="fa fa-search"></i>
 					<span>搜索我的收藏</span>
 				</div>
 			</div>
 		)
 	}
 }
//content
class Favcontent extends Component{
	render(){
		return(
			<div className="Fav-content">
				<h2>把美式于爱保存下来</h2>
				<h3>没有人生来就是好厨师,轻点收藏,将你最喜欢的菜谱保存下来,为你下一顿私房红烧肉做准备</h3>
			</div>
		)	
	}
}
 export default Fav

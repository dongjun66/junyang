import React,{Component} from "react"
 import "./index.scss"
 import Longin from "../../commons/loginoption"
  
 class Mine extends Component{
 	render(){
 		return(
 		<div className = "mine">
 			<Minetop/>
 			<Minecontent/>
 			<Longin/>
 			</div>
 		)
 	}
 }
 //top
 class Minetop extends Component{
 	render(){
 		return(
 			
 				<div className="Mine-header">
 					<i className="fa fa-plus"></i>
 					<span>我</span>
 					<u className="fa fa-cog"></u>
 				</div>
 		)
 	}
 }
 //content
 class Minecontent extends Component{
	render(){
		return(
			<div className="Mine-content">
				<h2>开始准备好好吃饭</h2>
				<h3>好好吃饭用心生活 比什么都幸福 保存你最喜欢的美食 分享你的三餐 关注厨房里的达人</h3>
			</div>
		)	
	}
}
 export default Mine

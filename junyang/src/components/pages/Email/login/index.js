import React,{Component} from "react"
 import "./index.scss"
 import Longin from "../../../commons/loginoption"
  
 class Emaillogin extends Component{
 	render(){
 		return(
 			<div className = "email">
	 			<Emailtop/>
	 			<Emailcontent/>
	 			<Longin/>
 			</div>
 		)
 	}
 }
 //top
 class Emailtop extends Component{
 	render(){
 		return(
 			
 				<div className="Email-header">
 					<i className="fa fa-location-arrow"></i>
 					<span>信箱</span>
 				</div>
 		)
 	}
 }
 //content
 class Emailcontent extends Component{
	render(){
		return(
			<div className="Email-content">
				<h2>你有一个小信箱</h2>
				<h3>美味调剂生活 订阅你最喜欢的美食栏目 将会在这里收到最高人气菜谱和美文</h3>
			</div>
		)	
	}
}
 export default Emaillogin

import React,{Component} from "react"
 import "./index.scss"
// import swiper from "swiper"
 class Home extends Component{
 	render(){
 		return(
 			<div className = "home">
 				<Header/>
 				<Nav/>
 				<Case/>
 			</div>
 		)
 	}
 }
 
 //haeder
 class Header extends Component{
 	render(){
 		return(
 			<header>
 					<div><i className="fa fa-plus"></i></div>
 					<div>
 						<i className="fa fa-search"></i><i>搜索菜谱 食材</i><i className="fa fa-microphone"></i>
 					</div>
 					<div><i className="fa fa-shopping-bag"></i></div>
 				</header>
 		)
 	}
 }
 //nav
 class Nav extends Component{
 	render(){
 		return(
 			<nav>
 					<div>
   						<img src={require("../../../assets/images/1.gif")} />
 						<span>厨房好物</span>
 					</div>
 					<div>
   						<img src={require("../../../assets/images/2.gif")} />
 						<span>厨房好物</span>
 					</div>
 					<div>
   						<img src={require("../../../assets/images/3.gif")} />
 						<span>厨房好物</span>
 					</div>
 					<div>
   						<img src={require("../../../assets/images/4.gif")} />
 						<span>厨房好物</span>
 					</div>
 				</nav>
 		)
 	}
 }
 //Case
 class Case extends Component{
 	render(){
 		return(
 			<div className="case">
   				<img src={require("../../../assets/images/case1.gif")}/>
   				<img src={require("../../../assets/images/case2.gif")}/>
 			</div>
 		)
 	}
 }
 //section
 class Section extends Component{
 	render(){
 		return(
 			<section>
 				<div></div>
 			</section>
 		)
 	}
 }
 
 
 export default Home

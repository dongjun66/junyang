import React,{Component} from "react"
 import "./index.scss"
// import swiper from "swiper"
 class Home extends Component{
 	render(){
 		return(
 			<div className = "home">
 				<Header/>
 				<Section/>
 				<Footer/>
 			</div>
 		)
 	}
 }
 
 //haeder
 class Header extends Component{
 	render(){
 		return(
 			<div className="head">
 				<header>
 					<div><i className="fa fa-plus"></i></div>
 					<div>
 						<i className="fa fa-search"></i><i>搜索菜谱 食材</i><i className="fa fa-microphone"></i>
 					</div>
 					<div><i className="fa fa-shopping-bag"></i></div>
 				</header>
 					</div>
 		)
 	}
 }
 //nav
 class Nav extends Component{
 	render(){
 		return(
 			<nav>
 					<div>
   						<img src={require("../../../assets/images/1.gif")} alt=""/>
 						<span>厨房好物</span>
 					</div>
 					<div>
   						<img src={require("../../../assets/images/2.gif")} alt=""/>
 						<span>厨房好物</span>
 					</div>
 					<div>
   						<img src={require("../../../assets/images/3.gif")} alt=""/>
 						<span>厨房好物</span>
 					</div>
 					<div>
   						<img src={require("../../../assets/images/4.gif")} alt=""/>
 						<span>厨房好物</span>
 					</div>
 				</nav>
 		)
 	}
 }
 
  //section
 class Section extends Component{
 	render(){
 		return(
 			<section>
 				<div>
 					<Nav/>
 					<Case/>
 					<Banner/>
 				</div>
 			</section>
 		)
 	}
 }
 
 
 //Case
 class Case extends Component{
 	render(){
 		return(
 			<div className="case">
   				<img src={require("../../../assets/images/case1.gif")} alt=""/>
   				<img src={require("../../../assets/images/case2.gif")} alt=""/>
 			</div>
 		)
 	}
 }

//banner
class Banner extends Component{
	render(){

		return(
			<div></div>
			
		)

			}
	}
 
 //footer
 class Footer extends Component{
 	render(){
 		return(
 			<div className="foot"></div>
 		)
 	}
 }
 export default Home

import React,{Component} from "react"
import Minelogin from "./login"
import Mineuser from "./user"
import {Route,Switch} from "react-router-dom"
import {connect} from "react-redux"
class Mine extends Component {
	componentWillMount(){
		let {history} = this.props
		if(this.props.userinfo){
			history.replace("/mine/user")
		}else{
			history.replace("/mine/login")
		}

	}
	render(){
		return(
			<div>
				<Switch>
					<Route path="/mine/login" exact component={Minelogin} />
					<Route path="/mine/user" exact component={Mineuser} />
				</Switch>
			</div>
			
		)
	}
}

export default connect(state=>state.commons)(Mine)

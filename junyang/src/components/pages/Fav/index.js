import React,{Component} from "react"
import Favlogin from "./login"
import Favuser from "./user"
import {Route,Switch} from "react-router-dom"
import {connect} from "react-redux"
class Fav extends Component {
	componentWillMount(){
		let {history} = this.props
		if(this.props.userinfo){
			history.replace("/fav/user")
		}else{
			history.replace("/fav/login")
		}

	}
	render(){
		return(
			<div>
				<Switch>
					<Route path="/fav/login" exact component={Favlogin} />
					<Route path="/fav/user" exact component={Favuser} />
				</Switch>
			</div>
			
		)
	}
}

export default connect(state=>state.commons)(Fav)

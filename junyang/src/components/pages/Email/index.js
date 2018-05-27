import React,{Component} from "react"
import Emaillogin from "./login"
import Emailuser from "./user"
import {Route,Switch} from "react-router-dom"
import {connect} from "react-redux"
class Email extends Component {
	componentWillMount(){
		let {history} = this.props
		if(this.props.userinfo){
			history.replace("/email/user")
		}else{
			history.replace("/email/login")
		}

	}
	render(){
		return(
			<div>
				<Switch>
					<Route path="/email/login" exact component={Emaillogin} />
					<Route path="/email/user" exact component={Emailuser} />
				</Switch>
			</div>
			
		)
	}
}

export default connect(state=>state.commons)(Email)

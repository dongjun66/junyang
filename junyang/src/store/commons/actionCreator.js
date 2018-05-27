import React,{Component} from "react"

import {GET_USER_INFO} from "./const"

const actionCreator = {
	login({username,password,success,fail}){
		return dispatch => {
			setTimeout(()=>{
				if(username === 'dongjun' && password === 'dongjun'){
					let action = {
						type:GET_USER_INFO,
						userinfo:{
							userid:1,
							username:"傻子"
						}
					}
					dispatch(action)
					success()
				}
				fail()
			},1000)
		}
	}
}

export default actionCreator
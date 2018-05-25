import React , { Component } from "react"
import "./style.scss"
import axios from 'axios'
class Shop_list extends Component{
	constructor(props){
		super(props)
		this.state={
			list:[],
			title:[]
		}
	}
	getInfo(){
		let {type} = this.props
		let url="";
		if(type=="new"){
			url="list2.json";
		}else if(type == "jingdian"){
			url="list3.json"
		}
		axios.get("/json/"+url).then(({data})=>{
			this.setState({list:data.data,title:data.title})
		})
		
	}
	componentWillMount(){
		this.getInfo()
	}
	render(){
		let {list,title} = this.state
		return (
			<div className="list2">
				{
					title.map(item=>{
						return (
							<Head title={item} key={item.id} />
						)
					})
				}
				<div className="body-box">
					<Con list={list} />
					
				</div>
			</div>
		)
	}
}

class Head extends Component{
	render(){
		let {title} = this.props
		
		return(
			<div className="head">
				<div>
					<span>{title.title1}</span>
					<span>{title.mess}</span>
				</div>
				<div>查看全部</div>
			</div>
		)
	}
}
class Con extends Component{
	render(){
		let {list} = this.props
		return(
			<div className="con">
				
				{
					list.map(item1=>{
						return(
							<Conmin item={item1} key={item1.id} />
						)
					})
				}
				
				
			</div>
		)
	}
}

class Conmin extends Component{
	render(){
		let { item } = this.props 
		return(
			
			<dl className="conmin">
				<dt><img src={require("../../../assets/shops/"+item.src)} alt="" /></dt>
				<dd>
					<span>{item.title}</span>
					<span>{item.info}</span>
					<span>
						<b>
							¥{item.price} <i>¥{item.origin}</i>
						</b>
						<i>{item.judge}分</i>
					</span>
					
				</dd>
			</dl>
			
		)
	}
}
export default Shop_list


import React , { Component } from "react"
import "./style.scss"
import axios from 'axios'
class New_list extends Component{
	constructor(props){
		super(props)
		this.state={
			List1:[],
			List2:[],
			List3:[]
		}
	}
	getInfo(){
		axios.get("/json/list.json").then(({data})=>{
			this.setState({List1:data.List1,List2:data.List2,List3:data.List3})
		})
		
	}
	componentWillMount(){
		this.getInfo()
	}
	render(){
		let {List1,List2,List3} = this.state
		return (
			<div className="list1">
				<Head />
				<div className="body-box">
					<Con list={List1} />
					<Con list={List2} />
					<Con list={List3} />
				</div>
			</div>
		)
	}
}

class Head extends Component{
	render(){
		return(
			<div className="head">
				<div>
					<span>爱尝鲜</span>
					<span>全网好货,超值低价</span>
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
			<div className="conmin">
				<dl>
					<dt><img src={require("../../../assets/shops/"+item.src)} alt="" /></dt>
					<dd>
						<span>{item.title}</span>
						<span>尝鲜价{item.price}元包邮,原价{item.origin}元</span>
						<span><i>来自:下厨房市集 | 05-23</i><i>已售{item.sale}</i></span>
					</dd>
				</dl>
			</div>
		)
	}
}
export default New_list


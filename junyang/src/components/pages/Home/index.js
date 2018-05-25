import React,{Component} from "react"
 import "./index.scss"
   import Swiper from "swiper"
   import axios from "axios"
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
 					<Article/>
 					<News/>
 				</div>
 			</section>
 		)
 	}
 }
 
 
 //Case
 class  Case extends Component{
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
class Banner extends Component {

    constructor (props) {
        super(props)
        this.state = {
            banners: []
        }
    }

    getBanners () {//获取焦点数据之后进行更新
        axios.get('/mz/v4/api/billboard/home', {
            params: {__t: Date.now()}
        }).then (res => {
            this.setState({banners: res.data.data.billboards})
            //在vue中，当上一次的数据更新引起的dom的重新渲染完成后，Vue.nextTick里面的回调函数会执行
            // Vue.nextTick (() => {
            //     //实例化swiper
            // })
            
            setTimeout(() => {
                new Swiper(this.el, {
                    scrollbar: {el: '.swiper-scrollbar'}
                })
            }, 0);
        })
    }

    componentWillMount () {
        //我一般情况下会将初始化数据获取放在willMount里，但是大家知道，和放在DidMount里效果一样
        //注意alibaba一直是放入到DidMount
        this.getBanners()

    }

    renderSlide () {
        let { banners } = this.state
        if (!banners.length) return (<div className="swiper-wrapper"></div>)

        return (
            <div className="swiper-wrapper">
                {
                    banners.map(item => {
                        return (
                            <div key = {item.id} className="swiper-slide">
                                <div className="img-box img-loading">
                                    <img width="100%" src={item.imageUrl} alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render () {
        return (
            <div ref = {el => this.el = el} className="swiper-container">
                {this.renderSlide()}
                <div className="swiper-scrollbar"></div>
            </div>
        )
    }

    componentDidUpdate () {
        // new Swiper(this.el, {
        //     pagination: {el: '.swiper-pagination'}
        // })
    }
       componentDidMount () {
           //在这里实例的话，页面中有0个swiper-slide
//         new Swiper(this.el, {
//             pagination: {el: '.swiper-scrollbar',draggable: true,}
//         })
       }
}
 //article
 class  Article extends Component{
 	render(){
 		return(
 			<article>
 				<img src={require("../../../assets/images/act.gif")} alt=""/>
 				<img src={require("../../../assets/images/act2.gif")} alt=""/>
 			</article>
 		)
 	}
 }
 //news
 class News extends Component{
   	
 	render(){
 		let {news}= this.props
 		return(
 			<div className="news">
 				<h2><span>生鲜料理包</span><i>查看全部</i></h2>
 				<div className="box">
 					{
 						news.map(item=>{
 							return(
		 						<div key={item.id}>
		 							<img src={require("../../../assets/images/"+item.Ourl)} alt=""/>
		 							<span>{item.title}</span>
		 						</div>
 							)
 						}) 					}
 				</div>
 			</div>
 		)
 	}
 }
   News.defaultProps = {
   	news:[
   		{id:1,Ourl:"new.gif",title:"香茅土豆三杯鸡"},
   		{id:2,Ourl:"new2.gif",title:"大肉炖白菜"},
   		{id:3,Ourl:"new.gif",title:"小鸡炖蘑菇"},
   		{id:4,Ourl:"new2.gif",title:"你觉得是啥"}
   	]
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

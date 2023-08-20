import React, { Component } from 'react'
import NewsItem from './NewsItems'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 5,
    catogory: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

	capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

constructor(props){
	super(props);
	console.log("hey")
	this.state = { 
		articles: [], 
		loading: false,
    page: 1
	}
document.title =`NewsUNIverse - ${this.capitalizeFirstLetter(this.props.category)}`
}

updateNews = async ()=>{
  this.props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70071bcc42554dbdad415df475f053ff&page=${this.state.page}&pageSize=${this.props.pageSize}`; 
  
  let data = await fetch(url);
  this.props.setProgress(30);
  let parsedData = await data.json();
  this.props.setProgress(70);
  console.log(parsedData)
  this.setState({
    articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loader: false
})
this.props.setProgress(100);
}

async componentDidMount(){  
	 this.updateNews();
} 

fetchMoreData = async ()=>{

	this.setState({
				page: this.state.page + 1})

	const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70071bcc42554dbdad415df475f053ff
	&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`; // we will make our page size variable through props
 
	let data = await fetch(url);
	let parsedData = await data.json();
	console.log(parsedData)
	this.setState({
		articles: this.state.articles.concat(parsedData.articles),
		totalResults: parsedData.totalResults,
		loader: false
	 
	 
})
}

render() {
	return (
<>
		<h1 className='text-center' style={{margin: "35px 0px"}}>News <span id='uni'> UNIverse </span> - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1> 
		<hr />
	<InfiniteScroll
				dataLength={this.state.articles.length}
				next={this.fetchMoreData}
				hasMore={this.state.articles.length !== this.state.totalResults }
				loader={<Spinner/>}
			>
			<div className="container">
		<div className="row d-flex justify-content-evenly">
		{ this.state.articles.map((element)=>{  
			return <div key={element.url} className="col-md-4"><NewsItem title={element.title?element.title:""} description={element.title?element.description: ""} urlToImage = {element.urlToImage?element.urlToImage: ""} author = {element.author}  publishedAt={element.publishedAt} newsUrl={element.url} source = {element.source.name}/></div> 
		})}

		</div>
      </div>
      </InfiniteScroll>
			</>
		)
	}
}



export default News
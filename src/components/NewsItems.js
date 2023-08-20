import React, { Component } from 'react'

export default class NewsItems extends Component {

	render() {

		let {title, description, urlToImage, author,  publishedAt, source, newsUrl} = this.props 
		return (
			<div className='my-3'>
				<div className="card text-center " >
				<div style={{display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
				<span className="badge " style={{ backgroundColor: "rgb(116, 144, 196)"}}> {source}</span>
	</div>
  <img src={urlToImage?urlToImage:"https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
		<p className="card-text"><small className="text-body-secondary"> By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel=' noopener noreferrer' className="btn btn-sm btn-transparent btn-color ">Read More</a> 
  </div>
</div>
			</div>
		)
	}
}
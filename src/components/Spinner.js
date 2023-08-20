import React, { Component } from 'react'
import loading from '../assets/spinner.gif'

export default class spinner extends Component {
	render() {
		return (
			<div className='text-center'> 
				<img className='my-3' id='spin' src={loading} alt="loading" />
			</div>
		)
	}
}


import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route,  Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state = {
    progress: 0
  }
    
  setProgress =(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    this.pageSize= 6;
    return (
      <div>
         <Navbar /> 
         <LoadingBar 
         height={3}
        color='#304c70'
        progress={this.state.progress}
      />
         <Routes>
    <Route exact path='/' element={<News setProgress = {this.setProgress}   key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
    <Route exact path='/business' element={<News setProgress = {this.setProgress}   key="business" pageSize={this.pageSize} country="us" category="business"/>}></Route>
    <Route exact path='/entertainment' element={<News setProgress = {this.setProgress}   key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}></Route>
    <Route exact path='/health' element={<News setProgress = {this.setProgress}   key="health" pageSize={this.pageSize} country="us" category="health"/>}></Route>
    <Route exact path='/science' element={<News setProgress = {this.setProgress}   key="science" pageSize={this.pageSize} country="us" category="science"/>}></Route>
    <Route exact path='/sports' element={<News setProgress = {this.setProgress}   key="sports" pageSize={this.pageSize} country="us" category="sports"/>}></Route>
    <Route exact path='/technology' element={<News setProgress = {this.setProgress}   key="technology" pageSize={this.pageSize} country="us" category="technology"/>}></Route>
    </Routes>
   
         
      </div>
    )
  }
}



import './App.css'
import React from 'react'
import { HashRouter as Router} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import {Link} from 'react-router-dom'
import About from './pages/about'
import Skills from './pages/skills'
import Blog from './pages/blog'
import Projects from './pages/projects'
import Competitions from './pages/competitions'
import Interests from './pages/interests'
import DSBlog from './pages/ds_blog'
function App(){
  var arr=['skills','blog','projects','interests','competitions']
  var names=['Skills','Blog','Projects','Interests','Competitions']
  class Logo extends React.Component
  {
    render(){
      return(<Link to="/"><img id="logo-img" src="logo1.png" alt="logo"></img></Link>)
    }
  }
  class Buttons extends React.Component
  {
    render()
    {
      var button_set=[]
      for(let i=0;i<this.props.links.length;i++)
      button_set.push(<Link id="nav-buttons" className={this.props.names[i]} to={this.props.links[i]}><span >{this.props.names[i]}</span></Link>)
      return(<div id="nav"><button id="dropdown">Menu</button><div id="home-nav">{button_set}</div></div>)
    }
  }
  class Header extends React.Component
  {
    render(){
      return(<header id="header"><Logo {...this.props}/><Buttons {...this.props}/></header>)
    }
  }
  class Footer extends React.Component
  {
    render(){
      return(<footer id="footer"><span> Get connected</span><br/><a href="https://www.linkedin.com/in/preethim2403/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedln icon"></img></a><a href="https://github.com/QubitMatrix" target="_blank"><img className="github-img" src="https://img.icons8.com/material-outlined/48/null/github.png" alt="github icon"/></a><a href="mailto:preethi13m@gmail.com"><img src="https://img.icons8.com/color/48/000000/gmail.png" alt="gmail icon"/></a><br/><span>&copy;Preethi. M</span></footer>)
    }
  }
  return(<div>
    <Router>
      <Header links={arr} names={names}/>
      <Footer/>
      <Routes>
        <Route exact path="/" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/competitions" element={<Competitions/>}/>
        <Route path="/interests" element={<Interests/>}/>
        <Route path="/blog/ds_blog" element={<DSBlog/>}/>
      </Routes>
    </Router>
  </div>)
}
export default App
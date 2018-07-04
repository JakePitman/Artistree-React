import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import ArtPage from './components/ArtPage'
import HomePage from './components/HomePage'
import RegisterForm from './components/RegisterForm'
import axios from 'axios'

import './App.css';

class App extends Component {

    state = {
        arts: null,
        duplicateError: false, 
        token: false, 
        
    }

    componentDidMount(){
         this.fetchArt().then(arts => {
             this.setState({arts})
             console.log(this.state)
         })
         

    }

    async fetchArt(){
        const url = "http://localhost:5000/arts"
        const response = await fetch(url)
        const arts = response.json()
        return arts
    }

    async createNewUser(user) {
        try {
            const newUser = await axios.post('http://localhost:5000/adduser', user)
          
            return newUser.data
        } catch(err) {
            alert('duplicate user, please login') 
            this.setState({duplicateError: true})
            
            
            
        }
       
        
    }

    async login(user){
       
        //go and get a token await f
        // set the token state to token 
        try {
            const response = await axios.post('http://localhost:5000/login', user)
            const token = response.data
            console.log(token)
            localStorage.setItem("token", token)
            this.setState({token: true})
            
        } catch(err){
            console.log(err)
        }
    }
    logout = () => {
        this.setState({token: null})
    }
    

    handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.children[1].value
        const password = e.target.children[3].value
    
        this.createNewUser({email, password})
    

    }

    handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.children[1].value
        const password = e.target.children[3].value

        this.login({email, password})

    }

    async addArt(art) {
        const response = await axios.post('http://localhost:5000/art', art)
        const artsCopy = [...this.state.arts]
        artsCopy.push(response.data)
        this.setState({arts: artsCopy})
        
    }

    handleAddArt = (e) => {
        e.preventDefault()
        const title = e.target.children[0].value
        const url = e.target.children[1].value
        this.addArt({title, url})
        
    }

    async handleDelete (e) {
        const id = e.target.id
        const response = await axios.delete('http://localhost:5000/art', id)
        console.log(response.data)

    }

  render() {
    if (!this.state.arts) {
        return <div className="App">Loading...</div>;
      }

    if (this.state.duplicateError){

          return <RegisterForm buttonName={"Login"} handleSubmit={this.handleLogin}/>
    }


    return (
      
        <Router>
            <div className="container">
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link> 
                        </li>
                        <li>
                            <Link to="/arts">Art</Link> 
                        </li>
                        {this.state.token ? '' : 
                        <li>
                          <Link to="/register">Register</Link>  
                        </li>}
                        {this.state.token ? <li> <Link to="/logout" onClick={this.logout}>Logout</Link> </li> : 
                        <li>
                          <Link to="/login">Login</Link>  
                        </li>}
                    </ul>
                </div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/arts" render={()=><ArtPage arts={this.state.arts} onClick={this.handleAddArt} onDelete={this.handleDelete}/>}/>
                    <Route path="/register" render={()=><RegisterForm buttonName={"Register"}  handleSubmit={this.handleRegister}/>}/>
                   
                    <Route exact path="/login" render={() => (
                        this.state.token ? (
                            <Redirect to="/arts"/>
                            ) : (
                                <RegisterForm buttonName={"Login"} handleSubmit={this.handleLogin}/>
                            )
                            )}/>
         
            </div>
        </Router>
    )
  }
}

export default App;

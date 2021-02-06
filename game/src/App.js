import './App.css';
import {Route} from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage';
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {
    Container,
} from 'semantic-ui-react'

class App extends Component {
    render(){
        return (
            <div className="App">
                <Header/>
                <Container text>
                    <Route exact path="/movies" component={MoviesPage}/>
                </Container>
               <Footer/>
            </div>
        );
    }

}

export default App;

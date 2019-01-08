import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Discover from './pages/Discover';
import Search from './pages/Search';
import Navbar from './components/Navbar';
// import Wrapper from './components/Wrapper';



const App = () => (

    <Router>
        
        <div>
        <Navbar/>
                <Route exact path="/" component={About} />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/search" component={Search}/>
        </div>
    </Router>


);


export default App; 
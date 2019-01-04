import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
// import Discover from './pages/Discover';
// import Search from './pages/Search';
// import Navbar from './components/Navbar';
// import Wrapper from './components/Wrapper';



const App = () => (

    <Router>
        <div>
    
                <Route exact path="/" component={About} />

                


        </div>
    </Router>


);


export default App; 
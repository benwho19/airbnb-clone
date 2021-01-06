
import './App.css';
import { Header, Home, Footer, SearchPage } from './components'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="app">
      
        <Router> 

            <Header/>

            <Switch>

                <Route path="/search"> 
                    <SearchPage/>
                </Route>

                <Route path="/">
                    <Home/>
                </Route>

    	    </Switch>

            <Footer/>

        </Router>

        </div>
    );
}

export default App;

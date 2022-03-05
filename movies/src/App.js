import {React} from 'react';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import WishList from './pages/wishList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Switch ,Route } from 'react-router-dom';
import MovieDetails from './pages/movieDetails';
import NotFound from './pages/NotFound';



function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className='container my-5'>   
    < Switch>
    <Route path={'/'} exact component={Home} />
    <Route path={'/wishlist'} exact component={WishList} />
    <Route path={'/moviedetails/:id'} exact component={MovieDetails} />
    <Route path={'**'} component={NotFound} />
    </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

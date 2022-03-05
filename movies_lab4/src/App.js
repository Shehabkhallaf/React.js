import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Movies from "./pages/movies";
import MoviesDetails from "./pages/movieDetails";
import NotFound from "./pages/NotFound";
function App() {
  return (
<BrowserRouter>

        <Switch>
          <Route path={"/"} exact component={Movies} />
          <Route path={"/movie-details/:id"} exact component={MoviesDetails} />
          <Route path={"*"} component={NotFound} /> 
        </Switch>
</BrowserRouter>
  );
}

export default App;
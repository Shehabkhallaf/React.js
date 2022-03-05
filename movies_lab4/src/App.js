import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter,  Switch,  Route} from "react-router-dom/cjs/react-router-dom.min";
import Movies from "./pages/movies";
import MoviesDetails from "./pages/movieDetails";
import NotFound from "./pages/NotFound";
import Header from "./components/header";
import FavPage from "./pages/wishList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Movies} />
        <Route path={"/movie-details/:id"} exact component={MoviesDetails} />
        <Route path={"/favorites/:id"} exact component={FavPage} />
        <Route path={"*"} component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

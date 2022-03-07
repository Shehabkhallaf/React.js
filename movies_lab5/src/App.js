import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/home";
import Details from "./pages/movieDetails";
import FavPage from "./pages/wishList";
import { LanguageChanger } from "./language/changeLanguage";
import { useState } from "react";
import './App.css';

function App() {
  const [language, setLanguage] = useState("en"); 
  return (

    <LanguageChanger.Provider value={{language, setLanguage}}>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route path={'/'} exact component={MainPage} />
        <Route path={'/movie-details/:id'} exact component={Details}/>
        <Route path={'/favorites'} exact component={FavPage}/>
      </Switch>
    </BrowserRouter>
    </LanguageChanger.Provider>

  );
}

export default App;
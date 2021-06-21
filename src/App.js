import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewHome from "./pages/Home.view"
import ViewNews from "./pages/News.view"
import ViewCreateNews from "./pages/CreateNews.view"
import ViewUpdateNews from "./pages/UpdateNews.view"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={ViewHome}></Route>
        <Route exact path='/Noticias' component={ViewNews}></Route>
        <Route exact path='/CriarNoticia' component={ViewCreateNews}></Route>
        <Route exact path='/AtualizarNoticia' component={ViewUpdateNews}></Route>
      </Router>
    </div>
  );
}

export default App;

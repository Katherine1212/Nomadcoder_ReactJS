import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from './routes/Home';
/*
  It was changed react-router-dom@6
  new version cannot support Switch.
  Futhermore, under version 6 Route use like <Route path= ""><componant/></Route> but version 6 it use like <Route path=  "" element= {<componant/>}/>

  <Router>
    <Switch>
      <Route path='/'>
        <componant/>
      </Route>
    </Switch>
  </Router>
*/
const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<Detail />} />
    </Routes>
  </Router>;
}

export default App;

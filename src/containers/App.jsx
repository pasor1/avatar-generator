import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserForm from '../components/UserForm/UserForm';
import Cards from '../components/Cards/Cards';


function App() {

  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/new-avatar">New Avatar</Link>
            </li>
          </ul>
        </nav>
      <div className="my-10 p-10 mx-auto max-w-6xl items-center">
        <Switch>
          <Route path="/new-avatar" component={UserForm}/>
          <Route path="/" component={Cards}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

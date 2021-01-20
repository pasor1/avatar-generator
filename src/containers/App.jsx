import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import UserForm from '../components/UserForm/UserForm';
import Cards from '../components/Cards/Cards';
import titleLogo from '../assets/images/title.png';


function App() {
  return (
    <Router>
      <header className="text-center pt-2 mb-7 bg-gradient-to-b from-purple-200 to-gray-200">
        <Link to="/"><img className="m-auto" style={{ width: `700px` }} alt="Avatar Generator" src={titleLogo} /></Link>
        <nav className="my-7">
          <NavLink to="/" exact activeClassName="border-purple-900 font-semibold" className="mx-3 p-4 border-b-2 bg-purple-700 bg-opacity-10 rounded-t hover:border-purple-700 text-purple-900">Avatars</NavLink>
          <NavLink to="/new-avatar" activeClassName="border-purple-900 font-semibold" className="mx-3 p-4 border-b-2 bg-purple-700 bg-opacity-10 rounded-t hover:border-purple-700 text-purple-900">Generator</NavLink>
        </nav>
      </header>

      <div className="px-10 mx-auto max-w-6xl items-center">
        <Switch>
          <Route path="/new-avatar" component={UserForm} />
          <Route path="/" component={Cards}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserForm from '../components/UserForm/UserForm';
import Cards from '../components/Cards/Cards';
import titleLogo from '../assets/images/title.png';

function App() {

  return (
    <Router>
      <header className="text-center mb-7 bg-gradient-to-b from-yellow-500 to-gray-200">

        <Link to="/"><img className="m-auto" style={{ width: `700px` }} alt="Avatar Generator" src={titleLogo} /></Link>

        <nav className="my-7">
          <Link to="/" className="mx-10 p-2 bg-purple-700 text-white outline-none rounded focus:outline-none hover:bg-purple-600 shadow-lg transform duration-75 ease-in-out">Latest avatars</Link>
          <Link to="/new-avatar" className="mx-10 p-2 bg-purple-700 text-white outline-none rounded focus:outline-none hover:bg-purple-600 shadow-lg transform duration-75 ease-in-out">Generate your avatar</Link>
        </nav>

      </header>

        
      <div className="px-10 mx-auto max-w-6xl items-center">
        <Switch>
          <Route path="/new-avatar" component={UserForm}/>
          <Route path="/" component={Cards}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

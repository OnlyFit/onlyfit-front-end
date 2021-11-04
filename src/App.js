import { Route, Switch } from 'react-router';
import Dashboard from './Components/Dashboard/Dashboard';
import HomeWithoutHome from './Components/HomeWithoutLogin/HomeWithoutLogin';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/everyonehome" component={HomeWithoutHome}/>
      </Switch>
    </div>
  );
}

export default App;

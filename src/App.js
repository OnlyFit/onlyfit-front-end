import { Route, Switch } from 'react-router';
import Dashboard from './Components/Dashboard/Dashboard';
import UserDashboard from './Components/Dashboard/UserDashboard';
import HomeWithoutHome from './Components/HomeWithoutLogin/HomeWithoutLogin';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/home" component={HomeWithoutHome} />
        <Route path="/user-home" component={UserDashboard} />
      </Switch>
    </div>
  );
}

export default App;

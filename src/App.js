import { Route, Switch } from 'react-router';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardUserTest from './Components/Dashboard/DashboardUserTest';
import DashboardCoachTest from './Components/Dashboard/DashboardCoachTest';
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
        <Route path="/dashboarduser" component={DashboardUserTest}/>
        <Route path="/dashboardcoach" component={DashboardCoachTest}/>
        <Route path="/everyonehome" component={HomeWithoutHome}/>
      </Switch>
    </div>
  );
}

export default App;

import { Route, Switch } from 'react-router';
import Dashboard from './Components/Dashboard/Dashboard';
import UserDashboard from './Components/Dashboard/UserDashboard';
import DashboardUserTest from './Components/Dashboard/DashboardUserTest';
import DashboardCoachTest from './Components/Dashboard/DashboardCoachTest';
import HomeWithoutHome from './Components/HomeWithoutLogin/HomeWithoutLogin';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import CreateRoutine from './Components/CreateRoutine';
import MyClasses from './Components/Dashboard/MyClasses';
import CoachRoutines from './Components/Dashboard/CoachRoutines';
import CoachClasses from './Components/Dashboard/CoachClasses';
import RoutineInfo from './Components/Dashboard/RoutineInfo';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomeWithoutHome} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user/home" component={UserDashboard} />
        <Route path="/user/my-classes" component={MyClasses} />
        <Route path="/coach-home" component={DashboardCoachTest} />
        <Route path="/createroutine" component={CreateRoutine}/>
        <Route path="/check-routines" component={CoachRoutines}/>
        <Route path="/check-classes" component={CoachClasses}/>
        <Route path="/routineInfo" component={RoutineInfo}/>
      </Switch>
    </div>
  );
}

export default App;

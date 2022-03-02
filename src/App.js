import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import * as ROUTES from './constants/routes';
import UserContext from './context/user';


const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login/>} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp/>} />
        <Route path ={"/*"} element={<NotFound/>} />
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
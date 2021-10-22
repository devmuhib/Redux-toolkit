import { Fragment } from 'react';
import Counter from './Components/Counter';
import Header from './Components/Header';
import Auth from './Components/Auth';
import UserProfile from './Components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />

      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;

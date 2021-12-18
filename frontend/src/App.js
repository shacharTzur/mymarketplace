import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import IWantPage from './pages/IWantPage';
import AuthContext from './store/auth-context';
import Header from './components/Header/Header';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path='/' element = {<HomePage />} />
        {!authCtx.isLoggedIn && (
          <Route path='/auth' element = {<AuthPage />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path='/profile' element = {<UserProfile />} />
        )}
          {/*{authCtx.isLoggedIn && (*/}
              <Route path='/i_want' element = {<IWantPage />} />
          )}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;

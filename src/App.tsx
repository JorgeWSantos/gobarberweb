import React from 'react';
import GlobalStyle from './styles/global';
// import SignIn from './pages/signin';
import SignUp from './pages/signup';
import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Diego' }}>
      <SignUp />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);
export default App;

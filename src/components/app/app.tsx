import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import LoginPage from '../../pages/login-page/login-page';


function App(): JSX.Element {
  return (

    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoute.SignIn}
        element={<LoginPage />}
      />
    </Routes>
  );
}

export default App;

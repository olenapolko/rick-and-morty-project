import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Spinner from '../spinner/Spinner';

const Login = lazy(() => import('../pages/Login'));
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const CharPage = lazy(() => import('../pages/CharPage'));

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path={process.env.PUBLIC_URL + "/"} element={<Login />} />
            <Route path={process.env.PUBLIC_URL + "/characters"} element={<MainPage/>}/>
            <Route path={process.env.PUBLIC_URL + "/characters/:charId"} element={<CharPage />} />
            <Route path={process.env.PUBLIC_URL + "/*"} element={<Page404/>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App;

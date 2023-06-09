import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Spinner from '../spinner/Spinner';

const Login = lazy(() => import('../pages/Login'));
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const CharPage = lazy(() => import('../pages/CharPage'));

function App() {
  return (
      <div className="app">
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/characters" element={<MainPage/>}/>
            <Route path="/characters/:charId" element={<CharPage />} />
            <Route path="*" element={<Page404/>} />
          </Routes>
        </Suspense>
      </div>
  )
}

export default App;


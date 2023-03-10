/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ErrorPage from './pages/ErrorPage';
import ProtectedRoute from './utils/ProtectedRoute';
import SignUp from './pages/SignUp/signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/error/:code' element={<ErrorPage />} />
          <Route path='/signup' element={<SignUp />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

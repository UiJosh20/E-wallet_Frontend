
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'


import Analysis from './Components/Chart/Analysis'
import Accounts from './Components/Accounts/Accounts'
import Profile from './Components/Profile/Profile'
import UserLayout from './Components/Layout/UserLayout'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/dashboard" index element={<Dashboard />} />
          <Route path="/chart" index element={<Analysis />} />
          <Route path="/cards" index element={<Accounts />} />
          <Route path="/profile" index element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App

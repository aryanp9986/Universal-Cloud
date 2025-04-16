import './App.css';
import { Routes, Route } from "react-router";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Landing from './components/Landing';
import Shop from './components/Shop';
import BudgetServers from './components/BudgetServers';
import NotFound from './components/NotFound';
import PremiumServers from './components/PremiumServers';
import ProVPS from './components/ProVPS';
import UltraVPS from './components/UltraVPS';
import Domains from './components/Domains';
import Profile from './components/Profile';
import Pay from './components/Pay';
import StaffApply from './components/StaffApply';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/signin' element={<SignIn />} />
        <Route path='/home' element={user ? <Home /> : <Landing />} />
        <Route path='/shop' element={user ? <Shop /> : <Landing />} />
        <Route path='/shop/budget-servers' element={user ? <BudgetServers /> : <Landing />} />
        <Route path='/shop/premium-servers' element={user ? <PremiumServers /> : <Landing />} />
        <Route path='/shop/pro-vps' element={user ? <ProVPS /> : <Landing />} />
        <Route path='/shop/ultra-vps' element={user ? <UltraVPS /> : <Landing />} />
        <Route path='/shop/domains' element={user ? <Domains /> : <Landing />} />
        <Route path='/profile/:id' element={user ? <Profile /> : <Landing />} />
        <Route path='/pay/:planType/:planName' element={user ? <Pay /> : <Landing />} />
        <Route path='/staff-apply' element={user ? <StaffApply /> : <Landing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

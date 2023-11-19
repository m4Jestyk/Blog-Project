import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux';
import authservice from './appwrite/auth';
import './App.css'
import { login, logout } from './store/authSlice';
import {Outlet} from 'react-router-dom'
import Header from './components/header/header';
import Footer from './components/footer/Footer';

function App() {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  dispatch(login({email:"ath@ath.com", password:"12345678"}));

  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
        // dispatch(login({userData}));
        console.log("Logged-In");
      }
      else {
        dispatch(logout());
      }
    })
    .catch((error)=>{
      console.log("Error fetching the current user ::",error);
    })
    .finally(()=>setLoading(false))
  },[])

  if (loading) {
    return null;
  } else {
    return (
      <div className=' min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className=' w-full block'>
          <Header />
          <main>
            ToDo: 
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
